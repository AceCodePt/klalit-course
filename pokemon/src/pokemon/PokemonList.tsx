import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Pokemon from "./Pokemon";

type Pokemon = {
  id: string,
  name: string
}

export default function PokemonList() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/pokemon").then(async (data) =>{
      if(data.ok){
        setPokemonList(await data.json())
      }
    })
  },[])
  console.log(pokemonList);
  
  return (
    <main>
      <header>PokemonList</header>
      <section style={{display:"flex", "flexDirection": "column"}}>
        {pokemonList.map(pokeman => {
          return <Link key={pokeman.id} to={pokeman.name}>{pokeman.name}</Link>
        })}
      </section>
      </main>
  )
}
