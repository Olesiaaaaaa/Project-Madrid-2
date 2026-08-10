import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Madrid from './Madrid'
import LasVentas from './LasVentas'
import RealMadrid from './RealMadrid'
import Montserrat from './Montserrat'

function Home() {
  useEffect(() => {
    window.name = 'main'
  }, [])

  return (
    <>
      <aside className="sidebar-left">
        <Link to="/madrid" className="menu-item">
          <h3>👑 Madrid</h3>
          <p>Столица Испании</p>
        </Link>
        <Link to="/las-ventas" className="menu-item">
          <h3>🏟️ Las Ventas</h3>
          <p>Главная арена Мадрида</p>
        </Link>
      </aside>

      <main className="main-content">
        <h1>Испания: Коррида, Футбол и Монсеррат</h1>
      </main>

      <aside className="sidebar-right">
        <Link to="/real-madrid" className="menu-item">
          <h3>Real Madrid</h3>
          <p>Стадион Сантьяго Бернабеу</p>
        </Link>
        <Link to="/montserrat" className="menu-item">
          <h3>⛰️ Montserrat</h3>
          <p>Священная гора Каталонии</p>
        </Link>
      </aside>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/madrid" element={<Madrid />} />
        <Route path="/las-ventas" element={<LasVentas />} />
        <Route path="/real-madrid" element={<RealMadrid />} />
        <Route path="/montserrat" element={<Montserrat />} />
      </Routes>
    </Router>
  )
}

export default App
