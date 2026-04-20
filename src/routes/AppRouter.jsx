import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Services";
import Login from "../layouts/Register";
import Register from "../layouts/Login";

export const router = createBrowserRouter([
  { path: "/", element: <Services /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);