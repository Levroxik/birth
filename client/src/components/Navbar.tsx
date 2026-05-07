export default function Navbar() {
  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(9,9,11,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid #27272a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "56px" }}>
        <span style={{ fontSize: "18px", fontWeight: 900, background: "linear-gradient(135deg,#a855f7,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.5px" }}>
          lowkey cooked 🎂
        </span>
        <span style={{ fontSize: "12px", color: "#52525b", fontStyle: "italic" }}>
          15 let. táta má ChatGPT. ty máš tohle.
        </span>
      </div>
    </nav>
  )
}
