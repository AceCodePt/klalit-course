import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { z } from "zod";

const dataSchema = z.array(
  z.object({
    name: z.string().transform((name) => name.toLowerCase()),
    detailId: z.coerce.number(),
  }),
);

type DataSchema = z.infer<typeof dataSchema>;

function App() {
  const [data, setData] = useState<DataSchema>();
  console.log(data);

  // useEffect(() => {
  //   fetch("http://localhost:3000/pokemons")
  //     .then((x) => {
  //       return x.json();
  //     })
  //     .then((data) => {
  //       return dataSchema.parse(data);
  //     })
  //     .then((x) => {
  //       setData(x);
  //     });
  // }, []);
  return (
    <>
      <header>
        <h1>My Pokedex</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
