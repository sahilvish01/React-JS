// Creating Realtime CLock

import { useEffect, useState } from "react"


export default function Clock()
{
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const [show, setShow] = useState(true);
    // let showBtn = "hide";
    // let time = new Date().toLocaleTimeString();
    
    useEffect(() => 
    {
        if(!show) return;

        let id = setInterval(() => {
                    setTime(new Date().toLocaleTimeString());
                    console.log("Hello");
                },1000)

        return () => 
        {
            clearInterval(id);   
        }


    },[show])

    
    return (
        <>
            <button onClick={() => show == true?setShow(false):setShow(true)}>{show?"Hide":"Show"}</button>

            {show&&<h1>Time: {time}</h1>}
        </>
    )
}



// useEffect function ko return kar sakta hai
// MOST IMP: useEffect se return hua function tab execute hota hai jab dependecy array ke element ki value change hoti hai, jaise hi value change hoti hai sabse pahle ye function execute hota hai
// Iss return huye function ko "Cleanup Function" bolte hai

// Agar setInterval ko useEffect ke andar nahi likhe to jitni baar component rerender hoga, utni baar setInterval webAPI ke paas chala jayega

// It means bahut saare setIntervals ek saath chalege unnecessary aur har baar setIntervals ki sankhya aur badhti jaayegi

// Hame keval ek hi setInterval ki jarurat hai and Hame pata hai ki useEffect keval first render mein hi execute hota hai aur jab dependency array ke element ki value change hoti hai tab execute hota hai


// Agar koi variable, useEffect ke andar modify ho raha ho and voh variable agar DOM se unmount ho gaya ho to bhi uss useEffect se return hua function execute ho jata hai

// unmount = Gayab