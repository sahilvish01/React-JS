import { useContext } from "react"
import { CountContext } from "../App"



export default function Display()
{
    const{count} = useContext(CountContext);    // Consumer

    return(
        <>
            <h1>Count: {count}</h1>
        </>
    )
}