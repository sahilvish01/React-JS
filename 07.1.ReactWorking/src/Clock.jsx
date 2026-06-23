import { useEffect, useState } from "react";

export default function Clock()
{
    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {

        const id = setInterval(() => 
        {                       
            setCurrTime(new Date().toLocaleTimeString());
        },1000)

        return () => clearInterval(id);

    },[])

    return(
        <>
            <h1>Time: {currTime}</h1>
        </>
    )
}