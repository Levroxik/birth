import { useEffect, useState } from "react"

interface Advice { icon: string; tip: string; koment: string }

export default function DadAdvice() {
  const [advice, setAdvice] = useState<Advice[]>([])

  useEffect(() => {
    fetch("/api/dad-advice")
      .then(r => r.json())
      .then(setAdvice)
      .catch(() => setAdvice([
        { icon: "🤖", tip: "ChatGPT právě zpracovává tvoje narozeniny.", koment: "Výsledek bude za chvíli. Nebo ne." },
      ]))
  }, [])

  return (
    <section style={{ padding: "0 20px 40px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 900, margin: "0 0 4px", color: "#fafafa" }}>
          táta & ChatGPT
        </h2>
        <p style={{ color: "#52525b", fontSize: "13px", margin: 0 }}>
          dnešní moudra. zdroj: chatgpt. peer review: žádný. jistota: absolutní.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "12px" }}>
        {advice.map((a, i) => (
          <div key={i} className="card fade-in" style={{ animationDelay: `${i * 80}ms`, borderLeft: "3px solid #a855f7" }}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{a.icon}</div>
            <p style={{ fontSize: "14px", fontWeight: 600, color: "#e4e4e7", margin: "0 0 8px", lineHeight: 1.5 }}>
              "{a.tip}"
            </p>
            <p style={{ fontSize: "12px", color: "#52525b", margin: 0, fontStyle: "italic" }}>
              — {a.koment}
            </p>
          </div>
        ))}
      </div>

      {/* Sleep special card */}
      <div className="card" style={{ marginTop: "16px", border: "1px solid rgba(239,68,68,0.3)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#ef4444,transparent)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", color: "#ef4444", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "8px" }}>
              😴 tátův spánkový audit
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "ChatGPT doporučuje", val: "12 hodin", color: "#ef4444", pct: 100 },
                { label: "táta vyžaduje", val: "12 hodin", color: "#f97316", pct: 100 },
                { label: "věda říká", val: "8–9 hodin", color: "#eab308", pct: 75 },
                { label: "ty spíš", val: "5 hodin", color: "#22c55e", pct: 42 },
              ].map(row => (
                <div key={row.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#71717a" }}>{row.label}</span>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: row.color }}>{row.val}</span>
                  </div>
                  <div style={{ height: "5px", background: "#27272a", borderRadius: "5px", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${row.pct}%`, background: row.color, borderRadius: "5px", transition: "width 0.5s ease" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", padding: "0 8px" }}>
            <div style={{ fontSize: "40px", fontWeight: 900, color: "#22c55e", lineHeight: 1 }}>5h</div>
            <div style={{ fontSize: "11px", color: "#52525b", marginTop: "4px" }}>reality</div>
            <div style={{ fontSize: "11px", color: "#3f3f46", marginTop: "8px", fontStyle: "italic" }}>táta nesouhlasí</div>
          </div>
        </div>
      </div>
    </section>
  )
}
