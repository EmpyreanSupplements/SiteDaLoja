import React from 'react'
import ReactDOM from 'react-dom/client'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Cadastrar from './Cadastrar'
import Login from "./Login"

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Cadastrar />
  },
  {
    path: "Login",
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
