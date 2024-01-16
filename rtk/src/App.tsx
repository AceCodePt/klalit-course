import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
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
