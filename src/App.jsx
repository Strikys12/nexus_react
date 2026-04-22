import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import fondoPantalla from "./assets/img/Fondo Página.jpeg"; // Asegúrate de que la ruta sea correcta aquí

export default function App() {
  const token = localStorage.getItem("token");

  // Estilo global para que toda la app tenga el fondo de Nexus
  const layoutStyle = {
    display: 'flex',
    minHeight: '100vh', // Ocupa el 100% del alto de la ventana
    width: '100vw',     // Ocupa el 100% del ancho de la ventana
    backgroundImage: `radial-gradient(circle, rgba(15, 42, 67, 0.4), #000), url(${fondoPantalla})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    margin: 0,
    padding: 0,
    overflowX: 'hidden'
  };

  return (
    <div style={layoutStyle}>
      {/* 1. La Sidebar se queda fija a la izquierda */}
      <Sidebar />

      {/* 2. El área principal que crece para ocupar el resto del espacio */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>

        <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Outlet /> {/* Aquí es donde "aterriza" el Login o los Servicios */}
        </main>

        <Footer />

        {token && (
          <p style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.5 }}>
            Sesión activa
          </p>
        )}
      </div>
    </div>
  );
}