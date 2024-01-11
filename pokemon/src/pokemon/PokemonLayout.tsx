import { Outlet } from 'react-router-dom'

export default function PokemonLayout() {
  return (
    <div>Welcome to my pokemon page
        <section>
            <Outlet/>
        </section>
    </div>
  )
}
