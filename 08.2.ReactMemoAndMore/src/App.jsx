import { useCallback, useState } from "react";
import Button from "./components/Button.jsx"

export default function App()
{
    const [count, setCount] = useState(0);

    // function handleCount()
    // {
    //   setCount(count+1);
    // }

    const handleCount = useCallback(() => 
    {
      setCount((prevCount) => prevCount + 1);       // setCount ke andar ke arrow function ke prevCount ko React khud latest count ki value dega
    },[])

    return(
      <>
        <h1>Count: {count}</h1>
        <Button handleCount = {handleCount}></Button>
      </>
    )
}