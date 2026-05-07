import { useState } from "react"

type Story = "knir" | "chorvatka"

interface Stage {
  id: string
  result: string
  color: string
  next?: Array<{ id: string; label: string }>
}

const knirStages: Record<string, Stage> = {
  idle: {
    id: "idle",
    result: "aktuální stav: volný, ale ne dobrovolně.",
    color: "#52525b",
    next: [{ id: "pozvi", label: "Pozvi ji domů" }],
  },
  pozvi: {
    id: "pozvi",
    result: "Odvaha: 100/100. Plán: neexistuje. Táta je na kole takže je čas.",
    color: "#a855f7",
    next: [
      { id: "rodice_doma", label: "Rodiče jsou doma (zase)" },
      { id: "ven", label: "Jdeme ven raději" },
    ],
  },
  rodice_doma: {
    id: "rodice_doma",
    result: "Táta se vrátil z kola, máma nevyšla z kuchyně. Voda se solí funguje evidentně jako GPS tracker.",
    color: "#ef4444",
    next: [{ id: "ven", label: "Jdeme ven" }],
  },
  ven: {
    id: "ven",
    result: "Venku. Procházka. Bylo 3°C. Nikdo nic neřekl první 4 minuty. Rekord.",
    color: "#f97316",
    next: [
      { id: "vsim_si", label: "Všiml jsem si... věci" },
      { id: "ukoncit", label: "Ukončit takticky" },
    ],
  },
  vsim_si: {
    id: "vsim_si",
    result: "Nebyl to stín. Byl to knír. Nebyl velký, ale byl tam. A teď to víme oba. Mlčení bylo hlasité.",
    color: "#ec4899",
    next: [
      { id: "ukoncit", label: "Ukončit slušně" },
      { id: "nevsimat", label: "Nevšímat si a pokračovat" },
    ],
  },
  nevsimat: {
    id: "nevsimat",
    result: "Pokus o ignorování: technicky úspěšný. Psychologicky: katastrofa. Výdrž: 11 minut.",
    color: "#f97316",
    next: [{ id: "ukoncit", label: "Ukončit slušně (teď)" }],
  },
  ukoncit: {
    id: "ukoncit",
    result: "Rozloučili jste se. Odešel jsi důstojně. Za 18 minut jsi ji odblokoval. Za 19 jsi nic nenapsal. Silné.",
    color: "#22c55e",
    next: [{ id: "napsat_znovu", label: "Napsat znovu 💀" }],
  },
  napsat_znovu: {
    id: "napsat_znovu",
    result: "A tam to je. Speedrun k lítosti dokončen. Proč? Dobrá otázka. Nezodpovězená otázka. Odesláno.",
    color: "#ef4444",
    next: [{ id: "idle", label: "Resetovat (a udělat to znovu)" }],
  },
}

const chorvatkaStages: Record<string, Stage> = {
  idle: {
    id: "idle",
    result: "Chorvatka. Instagram. Secret. Status: pending od nepaměti. Profil: privátní. Osud: nejasný.",
    color: "#06b6d4",
    next: [{ id: "poslat", label: "Poslat žádost o secret 🇭🇷" }],
  },
  poslat: {
    id: "poslat",
    result: "Odesláno. Srdce bije. Profil je na privátní. Počítadlo dní: 1.",
    color: "#a855f7",
    next: [
      { id: "cekat1", label: "Čekat (1 den)" },
      { id: "cekat3", label: "Čekat (3 dny, zoufalejší)" },
    ],
  },
  cekat1: {
    id: "cekat1",
    result: "Den uplynul. Ona zveřejnila story z pláže. Tebe nevidí. Ty ji vidíš. Asymetrický vztah.",
    color: "#eab308",
    next: [{ id: "znovu", label: "Poslat žádost znovu (omylem)" }],
  },
  cekat3: {
    id: "cekat3",
    result: "Tři dny. Pořád pending. Ona sdílela story. Pak další story. Pak highlight. Tebe to všechno vidíš.",
    color: "#f97316",
    next: [{ id: "znovu", label: "Poslat znovu (to je chyba)" }],
  },
  znovu: {
    id: "znovu",
    result: "Teď ví, že čekáš. Ví, jak dlouho čekáš. Profil si prohlíží a pak neprohlíží. Schválení: stále ne.",
    color: "#ef4444",
    next: [
      { id: "jeste_jednou", label: "Ještě jednou? (ne)" },
      { id: "vzdej_se", label: "Vzdát se s grácií" },
    ],
  },
  jeste_jednou: {
    id: "jeste_jednou",
    result: "Třetí žádost odeslána. Chorvatko, pokud toto čteš: ne.",
    color: "#ef4444",
    next: [{ id: "vzdej_se", label: "Vzdát se" }],
  },
  vzdej_se: {
    id: "vzdej_se",
    result: "Shrnutí: Chorvatka 1 — Ty 0. Chorvatsko je krásné. Možná příliš krásné. Na příští rok.",
    color: "#22c55e",
    next: [{ id: "idle", label: "Zkusit znovu (příští léto)" }],
  },
}

const btnColors: Record<string, string> = {
  pozvi: "#a855f7", rodice_doma: "#ef4444", ven: "#f97316", vsim_si: "#ec4899",
  nevsimat: "#eab308", ukoncit: "#22c55e", napsat_znovu: "#ef4444", idle: "#52525b",
  poslat: "#06b6d4", cekat1: "#a855f7", cekat3: "#f97316", znovu: "#ef4444",
  jeste_jednou: "#ef4444", vzdej_se: "#22c55e",
}

function getBtnColor(id: string) { return btnColors[id] || "#71717a" }

export default function TalkingStage() {
  const [story, setStory] = useState<Story>("knir")
  const [knirId, setKnirId] = useState("idle")
  const [chorvatkaId, setChorvatkaId] = useState("idle")
  const [history, setHistory] = useState<string[]>([])

  const stages = story === "knir" ? knirStages : chorvatkaStages
  const currentId = story === "knir" ? knirId : chorvatkaId
  const setCurrentId = story === "knir" ? setKnirId : setChorvatkaId
  const current = stages[currentId]

  const handle = (nextId: string) => {
    setHistory(h => {
      const label = stages[nextId]?.result?.slice(0, 30) + "..."
      return [...h, label].slice(-4)
    })
    setCurrentId(nextId)
    if (nextId === "idle") setHistory([])
  }

  const switchStory = (s: Story) => {
    setStory(s)
    setHistory([])
  }

  return (
    <section style={{ padding: "0 20px 40px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 16px", color: "#fafafa" }}>
        talking stage simulator
      </h2>

      {/* Story selector */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <button
          onClick={() => switchStory("knir")}
          style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.15s", borderColor: story === "knir" ? "#ec4899" : "#3f3f46", background: story === "knir" ? "rgba(236,72,153,0.15)" : "transparent", color: story === "knir" ? "#ec4899" : "#71717a" }}
        >
          😬 Knírková sága
        </button>
        <button
          onClick={() => switchStory("chorvatka")}
          style={{ padding: "8px 16px", borderRadius: "10px", border: "1px solid", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.15s", borderColor: story === "chorvatka" ? "#06b6d4" : "#3f3f46", background: story === "chorvatka" ? "rgba(6,182,212,0.15)" : "transparent", color: story === "chorvatka" ? "#06b6d4" : "#71717a" }}
        >
          🇭🇷 Chorvatská sága
        </button>
      </div>

      <div className="card">
        {/* Context banner */}
        <div style={{ padding: "10px 14px", background: "#27272a", borderRadius: "10px", marginBottom: "16px", fontSize: "12px", color: "#52525b", lineHeight: 1.6 }}>
          {story === "knir"
            ? "kontext: chtěl ji pozvat domů. rodiče byli doma. pořád. jenom chodili ven. pak si všiml knírku. ukončil to slušně. teď ji chce znovu."
            : "kontext: chorvatka. privátní instagram. žádost o secret pending. schválení: dosud ne. stav: trpělivý, ale jen zdánlivě."}
        </div>

        {/* Status */}
        <div style={{ padding: "16px", background: `${current.color}12`, border: `1px solid ${current.color}33`, borderRadius: "12px", marginBottom: "16px" }}>
          <p className="fade-in" style={{ fontSize: "15px", fontWeight: 600, color: current.color, margin: 0, lineHeight: 1.6 }}>
            {current.result}
          </p>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
            {history.map((h, i) => (
              <span key={i} style={{ fontSize: "10px", padding: "2px 7px", background: "#27272a", borderRadius: "100px", color: "#3f3f46" }}>{h}</span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {current.next?.map(opt => {
            const c = getBtnColor(opt.id)
            return (
              <button
                key={opt.id}
                onClick={() => handle(opt.id)}
                style={{ padding: "10px 16px", background: `${c}18`, border: `1px solid ${c}44`, borderRadius: "10px", color: c, fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = `${c}30`)}
                onMouseLeave={e => (e.currentTarget.style.background = `${c}18`)}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
