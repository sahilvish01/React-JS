import { useState } from "react";


function Counter({item})
{
    const [count, setCount] = useState(0);

    return(
      <>
        <h1>Counter of React {item}: {count}</h1>
        <button onClick={() => {setCount(count+1)}}>Increase</button>
        <button onClick={() => {setCount(count-1)}}>Decrease</button>
      </>
    )
}

export default Counter;