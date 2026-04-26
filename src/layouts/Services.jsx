import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const programas = [
  { nombre: "Desarrollo de Software", semestres: "3 semestres", color: "blue" },
  { nombre: "Arte Culinario", semestres: "3 semestres", color: "green" },
  { nombre: "Comercio Internacional", semestres: "3 semestres", color: "magenta" },
  { nombre: "Seguridad Laboral", semestres: "3 semestres", color: "purple" },
  { nombre: "Sistemas Informáticos", semestres: "3 semestres", color: "cyan" },
  { nombre: "Producción de Eventos", semestres: "3 semestres", color: "yellow" },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="services-main">
        <h1>¡Bienvenido!</h1>
        <p className="subtitle">Conoce nuestros programas</p>
        <div className="program-grid">
          {programas.map((p) => (
            <Card
              key={p.nombre}
              nombre={p.nombre}
              semestres={p.semestres}
              color={p.color}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}