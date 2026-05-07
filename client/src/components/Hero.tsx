export default function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "60px 20px 50px", textAlign: "center" }}>
      <div className="orb" style={{ width: 350, height: 350, background: "rgba(168,85,247,0.15)", top: -80, left: -80 }} />
      <div className="orb" style={{ width: 250, height: 250, background: "rgba(236,72,153,0.1)", top: 40, right: -60 }} />
      <div className="orb" style={{ width: 200, height: 200, background: "rgba(6,182,212,0.08)", bottom: -40, left: "45%" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ display: "inline-block", padding: "4px 14px", background: "rgba(236,72,153,0.15)", border: "1px solid rgba(236,72,153,0.35)", borderRadius: "100px", fontSize: "13px", color: "#ec4899", fontWeight: 700, marginBottom: "20px", letterSpacing: "0.5px" }}>
          🎂 15 let bezdůvodné existence
        </div>

        <h1 className="glitch" style={{ fontSize: "clamp(38px,8vw,72px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 16px", background: "linear-gradient(135deg,#ffffff 0%,#a855f7 50%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          narozeniny,<br />bastarde 🎂
        </h1>

        <p style={{ fontSize: "clamp(15px,2.5vw,19px)", color: "#71717a", maxWidth: "560px", margin: "0 auto 16px", lineHeight: 1.65 }}>
          táta zrovna konzultuje s ChatGPT, co ti dát k narozeninám.
        </p>
        <p style={{ fontSize: "14px", color: "#52525b", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.6 }}>
          výsledek: doporučí ti spát 12 hodin a pít vodu s medem a se solí.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "28px", flexWrap: "wrap" }}>
          {[
            { label: "spánek", value: "5/12h", color: "#ef4444", sub: "táta vyžaduje 12" },
            { label: "iontáky", value: "zakázány", color: "#f97316", sub: "med + sůl prý stačí" },
            { label: "chorvatka", value: "pending", color: "#a855f7", sub: "secret neschválena" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "20px", fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: "11px", color: "#52525b", textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" }}>{s.label}</div>
              <div style={{ fontSize: "11px", color: "#3f3f46", marginTop: "2px" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
