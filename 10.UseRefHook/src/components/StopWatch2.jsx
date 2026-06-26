// Stop watch using useRef

import { useEffect, useRef, useState } from "react";

export default function StopWatch2()
{
    const [time, setTime] = useState(0);
    let intervalId = useRef(null);          // Runs only at first render

    useEffect(() =>                         // Jab component screen se unmount ho to setInterval clear ho jaaye cleanup function ke through 
    {
        return(
            () => {
                clearInterval(intervalId.current);
            }
        )
    },[])

    function handleStart()
    {
        if(intervalId.current != null)
        {
            return;
        }
        intervalId.current = setInterval(() => 
        {
            setTime(time => time + 1);
        }, 1000)
    }

    function handleStop()
    {
        clearInterval(intervalId.current);
        intervalId.current = null;
    }

    function handleReset()
    {
        clearInterval(intervalId.current);
        setTime(0);
        intervalId.current = null;
    }

    return(
        <>
            <h1>Time: {time}</h1>
            <button onClick={handleStart}> Start </button>
            <button onClick={handleStop}> Stop </button>
            <button onClick={handleReset}> Reset </button>
        </>
    )
}