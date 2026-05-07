import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#09090b" }}>
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
