// Stop watch without using useRef

// Problem: 1. Memory leak - Agar ye component screen se unmount bhi ho jata hai aur agar clock start hai to webApi still setInterval ko chalate hi rahegi 
//          2. IntervalId ki value change karne par bhi pure component ko rerender karana pad raha
import { useState } from "react";

export default function StopWatch1()
{
    const [time, setTime] = useState(0);
    const [IntervalId, setIntervalId] = useState(null);

    function handleStart()
    {
        if(IntervalId != null)
            return;

        setIntervalId(setInterval(() => 
        {
            setTime(currtime => currtime+1);
        }, 1000))
    }

    function handleStop()
    {
        clearInterval(IntervalId);
        setIntervalId(null);
    }

    function handleReset()
    {
        setTime(0);
        clearInterval(IntervalId);
        setIntervalId(null);
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