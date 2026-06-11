// useState Hook:

import { useState } from "react";


// export default function App()
// {

//     let count = 0;

//     function setCount()
//     {
//         let h1 = document.querySelector("h1");
        
//         count++;

//         h1.textContent = `Count: ${count}`;
//     }


//     return (
//         <div id="box">
//             <h1>Count: {count}</h1>
//             <button onClick={setCount}>Click</button>
//         </div>
//     )
// }


// Aisa Ham bilkul nahi karte ham actual mein react ki real power hi chhin le rahe hai real DOM ko directly manuplate karke

// Ye way source bug bhi create kar deta hai jab ham React component ko multiple jagah reuse karte hai



// Solution: useState
export default function App()
{
    let [count, setCount] = useState(0);

    function increment()
    {
        count++;

        setCount(count);
    }

    return(
        <div id="box">
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}



