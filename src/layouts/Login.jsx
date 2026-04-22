import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiFetch, endpoints } from "../services/api";
import { successAlert, errorAlert } from "../helpers/alerts";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Hacemos GET para traer todos los usuarios
      const usuarios = await apiFetch(endpoints.login, {
        method: "GET",
      });

      // 2. Validamos si los datos del formulario existen en la lista de la DB
      const usuarioValido = usuarios.find(
        (u) => u.email === email && u.password === password
      );

      if (usuarioValido) {
        localStorage.setItem("token", "fake-token");
        successAlert("Login exitoso");
        navigate("/services");
      } else {
        errorAlert("Credenciales incorrectas");
      }

    } catch (error) {
      errorAlert("No se pudo conectar con el servidor");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>
      </form>

      <p>
        ¿No tienes cuenta?
        <Link to="/register"> Regístrate aquí</Link>
      </p>
    </div>
  );
}