import { useState } from "react";
import Counter from "./Counter";


export default function App()
{
    const [items, setItems] = useState(["A", "B", "C"]);

    function AddD()
    {
        setItems(["D",...items]);
    }

    return(
      <>
          <button onClick={AddD}>Add "D"</button>
          {items.map(item => <Counter item={item} key={item}></Counter>)}
      </>
    )
}