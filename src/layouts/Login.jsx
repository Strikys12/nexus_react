import { useState } from "react";
import { useNavigate } from "react-router-dom";

const estudiantes = [
  { usuario: "estudiante1", clave: "1234" },
  { usuario: "estudiante2", clave: "abcd" },
];

const administrativos = [
  { usuario: "admin1", clave: "adminpass" },
  { usuario: "admin2", clave: "clave456" },
];

export default function Login() {
  const navigate = useNavigate();
  const [rol, setRol] = useState("estudiante");
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const lista = rol === "estudiante" ? estudiantes : administrativos;
    const valido = lista.some((u) => u.usuario === usuario && u.clave === clave);

    if (valido) {
      alert(`✅ Bienvenido, ${rol === "estudiante" ? "Estudiante" : "Personal Administrativo"}!`);
      navigate(rol === "estudiante" ? "/preseleccion" : "/admin");
    } else {
      alert("❌ Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="fondo">
      <div className={`contenedor-login ${rol}`}>
        <div className="encabezado">
          <span className="logo-text">🛡 NEXUS</span>
          <h2>Portal de Admisiones</h2>
          <p>Bienvenido al sistema de acceso universitario</p>
        </div>

        <div className="selector">
          <button
            className={rol === "estudiante" ? "activo" : ""}
            onClick={() => setRol("estudiante")}
          >
            Estudiante
          </button>
          <button
            className={rol === "administrativo" ? "activo" : ""}
            onClick={() => setRol("administrativo")}
          >
            Personal Administrativo
          </button>
        </div>

        <div className="form-login">
          <label>Usuario</label>
          <input
            type="text"
            placeholder={rol === "estudiante" ? "Ingrese su nombre de usuario" : "Ingrese su ID administrativo"}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder={rol === "estudiante" ? "Ingrese su contraseña" : "Ingrese su clave institucional"}
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <div className="botones">
            <button onClick={handleLogin}>Ingresar</button>
            <button onClick={() => navigate("/register")}>Crear cuenta</button>
          </div>
        </div>

        <p className="footer-login">© 2025 Nexus Todos los derechos reservados</p>
      </div>
    </div>
  );
}