import { useContext } from "react"
import { CountContext } from "../App"


export default function Counter()
{
    const {count, setCount} = useContext(CountContext);     // Consumer

    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count => count+1)}>increment</button>
            <button onClick={() => setCount(count => count-1)}>decrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </>
    )
}