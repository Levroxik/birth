import { useState, useEffect } from "react"

interface BanterData {
  arsenal: string; united: string; rivalry: string;
  notifications: string[]; garnacho: string; gyokeres: string;
}

export default function FootballTrauma() {
  const [banter, setBanter] = useState<BanterData | null>(null)
  const [loading, setLoading] = useState(false)
  const [rivalryAnim, setRivalryAnim] = useState(false)

  const fetchBanter = () => {
    setLoading(true)
    fetch("/api/football/banter")
      .then(r => r.json())
      .then((d: BanterData) => {
        setBanter(d)
        setRivalryAnim(true)
        setTimeout(() => setRivalryAnim(false), 600)
        setLoading(false)
      })
      .catch(() => {
        setBanter({
          arsenal: "Arsenal jsou podezřele kompetentní. Znovu.",
          united: "United rekonstruují. Stále.",
          rivalry: "kontrast je krutý.",
          notifications: ["VAR detekoval utrpení", "gól inkasován 90+7", "krizové setkání"],
          garnacho: "Subject 49 dorazil na Stamford Bridge. Todd Boehly si odškrtl další políčko.",
          gyokeres: "Gyökeres: 43 gólů. Šeško: zvažoval. Výsledek jasný.",
        })
        setLoading(false)
      })
  }

  useEffect(() => { fetchBanter() }, [])

  return (
    <section style={{ padding: "0 20px 40px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "12px" }}>
        <h2 style={{ fontSize: "26px", fontWeight: 900, margin: 0, color: "#fafafa" }}>
          fotbalové trauma
        </h2>
        <div style={{ padding: "4px 12px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px", fontSize: "12px", color: "#ef4444", fontWeight: 600 }}>
          ⚠️ nenech strýce mluvit o fotbale
        </div>
      </div>

      {/* Arsenal vs United */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div className="card" style={{ border: "1px solid rgba(34,197,94,0.3)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#22c55e,#ef4444)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "20px" }}>⚡</span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", padding: "2px 8px", borderRadius: "100px" }}>
              nešťastně elitní
            </span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e4e4e7", marginBottom: "6px" }}>Arsenal</div>
          <p style={{ fontSize: "12px", color: "#a1a1aa", margin: 0, lineHeight: 1.5, minHeight: "50px" }}>
            {banter?.arsenal || "načítám banter..."}
          </p>
        </div>

        <div className="card" style={{ border: "1px solid rgba(239,68,68,0.3)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#ef4444,transparent)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "20px" }}>💀</span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#ef4444", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", padding: "2px 8px", borderRadius: "100px" }}>
              kolaps v průběhu
            </span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e4e4e7", marginBottom: "6px" }}>Man United</div>
          <p style={{ fontSize: "12px", color: "#a1a1aa", margin: 0, lineHeight: 1.5, minHeight: "50px" }}>
            {banter?.united || "načítám utrpení..."}
          </p>
        </div>
      </div>

      {/* Garnacho + Gyökeres vs Šeško */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div className="card" style={{ border: "1px solid rgba(168,85,247,0.3)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#a855f7,transparent)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "20px" }}>4️⃣9️⃣</span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#a855f7", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", padding: "2px 8px", borderRadius: "100px" }}>
              Subject 49
            </span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e4e4e7", marginBottom: "6px" }}>Garnacho / Chelsea</div>
          <p style={{ fontSize: "12px", color: "#a1a1aa", margin: 0, lineHeight: 1.5, minHeight: "50px" }}>
            {banter?.garnacho || "načítám Subject 49..."}
          </p>
        </div>

        <div className="card" style={{ border: "1px solid rgba(34,197,94,0.3)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg,#22c55e,transparent)" }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "20px" }}>⚡</span>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#22c55e", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", padding: "2px 8px", borderRadius: "100px" }}>
              lepší nákup
            </span>
          </div>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e4e4e7", marginBottom: "6px" }}>Gyökeres vs Šeško</div>
          <p style={{ fontSize: "12px", color: "#a1a1aa", margin: 0, lineHeight: 1.5, minHeight: "50px" }}>
            {banter?.gyokeres || "načítám góly..."}
          </p>
        </div>
      </div>

      {/* Rivalry meter */}
      <div className="card" style={{ marginBottom: "12px" }}>
        <div style={{ fontSize: "11px", color: "#52525b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>soupeřský metr</div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "8px" }}>
          <span style={{ fontSize: "11px", color: "#22c55e", fontWeight: 700, minWidth: "56px" }}>Arsenal</span>
          <div style={{ flex: 1, height: "8px", background: "#27272a", borderRadius: "8px", overflow: "hidden" }}>
            <div style={{ height: "100%", width: rivalryAnim ? "0%" : "72%", background: "linear-gradient(90deg,#22c55e 60%,#ef4444)", borderRadius: "8px", transition: "width 0.8s cubic-bezier(.4,0,.2,1)" }} />
          </div>
          <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 700, minWidth: "56px", textAlign: "right" }}>United</span>
        </div>
        {banter?.rivalry && <p style={{ fontSize: "12px", color: "#52525b", margin: 0, fontStyle: "italic" }}>"{banter.rivalry}"</p>}
      </div>

      {/* Notifications */}
      {banter?.notifications && (
        <div className="card" style={{ marginBottom: "12px" }}>
          <div style={{ fontSize: "11px", color: "#52525b", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>živé fotbalové notifikace</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            {banter.notifications.map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", background: "#27272a", borderRadius: "9px", fontSize: "12px", color: "#e4e4e7" }}>
                <span className="pulse-dot" style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ef4444", flexShrink: 0 }} />
                {n}
              </div>
            ))}
          </div>
        </div>
      )}

      <button onClick={fetchBanter} disabled={loading} style={{ width: "100%", padding: "12px", background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.3)", borderRadius: "10px", color: "#a855f7", fontSize: "14px", fontWeight: 600, cursor: "pointer", opacity: loading ? 0.5 : 1, transition: "all 0.15s" }}>
        {loading ? "generuji utrpení..." : "⚡ generovat banter"}
      </button>
    </section>
  )
}
