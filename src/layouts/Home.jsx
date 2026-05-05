import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">¡Es hora de inscribirte!</h1>
          <h2 className="highlight-text">Tu futuro comienza hoy</h2>
          <p className="hero-subtitle">Programas líderes en calidad</p>
          <button className="btn-programa" onClick={() => navigate("/services")}>
            Nuestros Programas
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}