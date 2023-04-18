import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Cadastrar from './Cadastrar'
import Login from "./Login"
import Home from "./Home"
import Carrinho from "./Carrinho"
import Promoções from "./Promoções"

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Login",
    element: <Login />
  }, 
  {
    path: "Cadastrar",
    element: <Cadastrar />
  }, 
  {
    path: "Carrinho",
    element: <Carrinho />
  },
  {
    path: "Promoções",
    element: <Promoções />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
