import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import Services from "../layouts/Services";
import Login from "../layouts/Login";
import Register from "../layouts/Register";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/services", element: <Services /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);