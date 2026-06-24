import { useCallback, useMemo, useState } from "react";
import Sum from "./Sum";

export default function App()
{
  const [count, setCount] = useState(0);

  let primeNums = useMemo(() => 
  {
      let primeNums = 0;

      for(let i = 2; i <= 100000; i++)
      {
          let j = 2;
          for(;j <= i/2; j++)
          {
            if(i%j == 0)
            {
              break;
            }
          }
          if(j > i/2)
          {
            primeNums++;
          }
      }
      return primeNums;
  },[])


  const sayHello = useCallback(() => 
  { 
    console.log("Hello");
    return "Hello"
  },[])

  sayHello();
  
  return(
    <>
      <Sum></Sum>
      <h1>Prime Numbers: {primeNums}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count+1)}}>Increment</button>
      <button onClick={() => {setCount(count-1)}}>Decrement</button>
    </>
  )
}