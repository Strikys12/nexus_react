import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // Estilo para el contenedor del menú
  const sidebarStyle = {
    padding: '20px',
    background: 'rgba(0, 0, 0, 0.3)', // Negro muy transparente
    backdropFilter: 'blur(10px)',   // Efecto de vidrio esmerilado
    height: '100vh',
    width: '200px',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  // Estilo para los links
  const linkStyle = ({ isActive }) => ({
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '10px',
    borderRadius: '8px',
    background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    transition: '0.3s'
  });

  return (
    <nav style={sidebarStyle}>
      <h3 style={{ color: 'white', marginBottom: '20px', fontSize: '1.2rem' }}>NEXUS</h3>

      <NavLink to="/login" style={linkStyle}>
        Login
      </NavLink>

      <NavLink to="/register" style={linkStyle}>
        Registro
      </NavLink>

      <NavLink to="/services" style={linkStyle}>
        Servicios
      </NavLink>
    </nav>
  );
}