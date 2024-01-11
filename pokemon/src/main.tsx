import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fight from "./Fight.tsx";
import PokemonWithPrams from "./PokemonWithPrams.tsx";
import NestedMain from "./nested-routing/NestedMain.tsx";
import PokemonLayout from "./pokemon/PokemonLayout.tsx";
import PokemonList from "./pokemon/PokemonList.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <> Not Found whatever</>
  },
  {
    path: "/pokemon",
    element: <PokemonLayout />,
    children: [
      {
        path: "",
        element: <PokemonList />
      },
      {
        path: ":pokemonName",
        element: <PokemonWithPrams />,
      }, {
        path: "*",
        element: <> pokemon Not Found</>
      },
    ]
  },
  {
    path: "/fight",
    element: <Fight names={["ditto", "mew", "pichu"]} />,
  },
  {
    path: "/pokemon/ability",
    element: <div>ability</div>,
  },
  {
    path: "/nested",
    element: <NestedMain />,
    children: [
      {
        path: "",
        element: <>check</>
      },
      {
        path: "foo",
        element: <>bar</>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
