import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fight from "./Fight.tsx";
import Pokemon from "./Pokemon.tsx";
import PokemonWithPrams from "./PokemonWithPrams.tsx";

const router = createBrowserRouter([
  {
    path: "/pokemon",
    element: <Pokemon name="ditto" health={10} />,
  },
  {
    path: "/pokemon/:pokemonName",
    element: <PokemonWithPrams/>,
  },
  {
    path: "/fight",
    element: <Fight names={["ditto", "mew", "pichu"]} />,
  },
  {
    path: "/pokemon/ability",
    element: <div>ability</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
