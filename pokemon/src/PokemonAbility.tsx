import { Link } from "react-router-dom"

function PokemonAbility(props: {name:string}) {
  return (
    <>
        ***
        <div>
            <Link to={"/pokemon/ability"}>{props.name}</Link>
        </div>
    </>
  )
}

export default PokemonAbility