import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Cadastro from './Cadastro';
import Carrinho from './Carrinho';
import Produto1 from './Produto1';
import Produto2 from './Produto2';
import Produto3 from './Produto3';
import Produto4 from './Produto4';
import Produto5 from './Produto5';
import Produto6 from './Produto6';
import Produto7 from './Produto7';
import Produto8 from './Produto8';
import Produto9 from './Produto9';
import Produto10 from './Produto10';
import Produto11 from './Produto11';
import Produto12 from './Produto12';
import Produto13 from './Produto13';
import Produto14 from './Produto14';
import Produto15 from './Produto15';
import Produto16 from './Produto16';

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
    path: "/Produto1",
    element: <Produto1 />
  },
  {
    path: "/Produto2",
    element: <Produto2 />
  },
  {
    path: "/Produto3",
    element: <Produto3 />
  },
  {
    path: "/Produto4",
    element: <Produto4 />
  },
  {
    path: "/Produto5",
    element: <Produto5 />
  },
  {
    path: "/Produto6",
    element: <Produto6 />
  },
  {
    path: "/Produto7",
    element: <Produto7 />
  },
  {
    path: "/Produto8",
    element: <Produto8 />
  },
  {
    path: "/Produto9",
    element: <Produto9 />
  },
  {
    path: "/Produto10",
    element: <Produto10 />
  },
  {
    path: "/Produto11",
    element: <Produto11 />
  },
  {
    path: "/Produto12",
    element: <Produto12 />
  },
  {
    path: "/Produto13",
    element: <Produto13 />
  },
  {
    path: "/Produto14",
    element: <Produto14 />
  },
  {
    path: "/Produto15",
    element: <Produto15 />
  },
  {
    path: "/Produto16",
    element: <Produto16 />
  },

  
])



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

