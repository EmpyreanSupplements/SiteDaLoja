import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cadastro from "./Cadastro";
import Carrinho from "./Carrinho";
import Login from "./Login";
import FormasPag from "./FormasPag";
import Produto1 from "./Produto1";
import Perfil from "./Perfil";
import ForgotPassword from "./ForgotPassword";
import NotFound from "./NotFound";
import PrivSeg from "./PrivSeg";
import AddProduct from "./addProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/carrinho",
    element: <Carrinho />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/FormasPag",
    element: <FormasPag />,
  },
  {
    path: "/product/:id",
    element: <Produto1 />,
  },
  {
    path: "/perfil",
    element: <Perfil />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/NotFound",
    element: <NotFound />,
  },
  {
    path: "/PrivSeg",
    element: <PrivSeg />,
  },
  {
    path: "/addProduct",
    element: <AddProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
