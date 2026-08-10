import { Link, useLocation } from 'react-router-dom'
import '../styles/layout.css'

function Layout({ children }) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="app-wrapper">
      {isHomePage && (
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
      )}

      <main className={isHomePage ? 'main-content' : 'main-content inner-page'}>
        {children}
      </main>
    </div>
  )
}

export default Layout
