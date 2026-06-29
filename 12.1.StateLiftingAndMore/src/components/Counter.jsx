

export default function Counter({count,setCount})
{  
    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count-1)}>decrement</button>
            <button onClick={() => setCount(0)}>reset</button>
        </>
    )
}