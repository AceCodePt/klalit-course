import { count, decremnet, doubledCount, increment } from "./signals"
import {Signal} from "@preact/signals-react"

export default function Counter(props: {count: Signal<number>}) {

    console.log("render")
    //use
  return (
    <div><>
    <button onClick={() => { count.value++}}>inc</button>
    <>{props.count}</>
    <>{doubledCount}</>
    <button onClick={decremnet}>dec</button>
    </></div>
  )
}
