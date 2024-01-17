import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PokemonList from "./components/PokemonList.tsx";
import PokemonDetails from "./components/PokemonDetails.tsx";
import { api } from "./store/api.ts";

const routes = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <PokemonList />,
      },
      {
        path: "/:pokemonName",
        element: <PokemonDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <RouterProvider router={routes} />
    </ApiProvider>
  </React.StrictMode>,
);
