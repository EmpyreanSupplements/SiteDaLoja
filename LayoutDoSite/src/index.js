import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from './Cadastro';
import Carrinho from './Carrinho';
import Login from './Login'
import FormasPag from './FormasPag';
import Produto1 from './Produto1';
import Perfil from './Perfil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Cadastro",
    element: <Cadastro />
  },
  {
    path: "/Carrinho",
    element: <Carrinho />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/FormasPag",
    element: <FormasPag />
  },
  {
    path: "/Produto1",
    element: <Produto1 />
  },
  {
    path: "/Perfil",
    element: <Perfil />
  }
])



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

