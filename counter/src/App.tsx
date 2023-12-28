import { useEffect, useState } from 'react';
import './App.css'
import Counter from './Counter'
import Reset from './Reset';

function App() {
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(async res => {
            const json = await res.json()
            setHeight(json.height)
        })
        console.log("one time only");
    },[])
    
  return (
    <>
    {height}
    <Counter count={count} setCount={setCount}/>
    <Reset setCount={setCount}/>
    </>
  )
}

export default App
