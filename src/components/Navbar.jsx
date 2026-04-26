import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <div className="navbar-brand" onClick={() => navigate("/")}>
          <span className="navbar-logo-text">🛡 NEXUS</span>
        </div>

        <div className="navbar-search">
          <input
            className="search-bar"
            type="search"
            placeholder="¿Qué quieres aprender?"
          />
        </div>

        <div className="navbar-links">
          <span onClick={() => navigate("/")} className="nav-link">Inicio</span>
          <button className="portal-btn" onClick={() => navigate("/login")}>
            Portal Universitario
          </button>
        </div>
      </div>
    </nav>
  );
}