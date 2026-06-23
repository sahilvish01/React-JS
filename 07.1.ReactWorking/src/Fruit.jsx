import { useState } from "react";


export default function Fruit()
{
    const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

    function AddMango()
    {
        // items.push("Mango");     
        // setItems(items);                 // Non Premitive type ke data referance ke base par check hote hai
        setItems(["Mango",...items]);
    }

    return(
        <>
            <ul>
                {items.map(item => <li key={item}>{item}</li>)}   {/* Real key mein api se aayi huyi unique id daalenge index nahi kyuki index array ke elements change hone par change ho sakta hai */}     
            </ul>
            <button onClick={AddMango}>Add Mangos</button>
        </>
    )
}