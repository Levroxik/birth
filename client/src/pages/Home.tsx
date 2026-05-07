import Hero from "../components/Hero"
import DadAdvice from "../components/DadAdvice"
import TalkingStage from "../components/TalkingStage"
import FootballTrauma from "../components/FootballTrauma"

export default function Home() {
  return (
    <main>
      <Hero />
      <DadAdvice />
      <TalkingStage />
      <FootballTrauma />
      <div style={{ textAlign: "center", padding: "32px 20px 48px", color: "#3f3f46", fontSize: "12px" }}>
        narozeniny. 15 let. táta má ChatGPT. stránka taky. spravedlivé? ne.
      </div>
    </main>
  )
}
