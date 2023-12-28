import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pokemon from './Pokemon.tsx';

const router = createBrowserRouter([
  {
    path: "/pokemon",
    element: <Pokemon name='ditto'/> 
  },
  {
    path: "/pokemon/ability",
    element: <div>ability</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
