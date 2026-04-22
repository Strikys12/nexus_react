import { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { apiFetch, endpoints } from "../services/api";
import { successAlert, errorAlert } from "../helpers/alerts";
import logoNexus from "../assets/img/logo nexus blanco-01.png";
import fondoPantalla from "../assets/img/Fondo Página.jpeg";

import "../layouts/login.css";// Asegúrate de que el archivo se llame exactamente así

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("estudiante"); // Estado para el rol seleccionado

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiFetch(endpoints.login, {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", "fake-token");
      successAlert("Login exitoso!!");
      navigate("/services");
    } catch (error) {
      errorAlert("Credenciales inválidas");
    }
  };

  return (
    <div className="fondo"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(15, 42, 67, 0.8), #000), url(${fondoPantalla})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',   // Cambié 'repeat' por 'no-repeat' porque con 'cover' no quieres que se repita
        backgroundSize: 'cover',
        // Es bueno asegurar el ancho total
        overflow: 'hidden'

      }}>
      <div className={`contenedor-login ${rol}`}>

        <div className="encabezado">
          <Link className="logo" to="/">
            <img src={logoNexus} alt="Logo Nexus" className="logo-img" />
          </Link>
          <h2>Portal Admisiones</h2>
          <p>Bienvenido al sistema de acceso universitario</p>
        </div>

        {/* Selector de Rol */}
        <div className="selector">
          <button type="button" className={rol === "estudiante" ? "activo" : ""}
            onClick={() => setRol("estudiante")}
          >
            Estudiante
          </button>
          <button type="button" className={rol === "admin" ? "activo" : ""}
            onClick={() => setRol("admin")}
          >
            Personal Administrativo
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email"
            id="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="botones">
            <button type="submit">Iniciar Sesión</button>
            <button type="button" onClick={() => navigate("/register")}>Crear cuenta</button>
          </div>
        </form>

        <footer>© 2026 Nexus Todos los derechos reservados</footer>
      </div>
    </div>
  );
}