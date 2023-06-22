import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from './Cadastro';
import Carrinho from './Carrinho';

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
])



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

