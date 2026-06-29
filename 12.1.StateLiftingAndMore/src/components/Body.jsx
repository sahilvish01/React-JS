import Counter from "./Counter"

export default function Body({count,setCount})
{
    console.log("Body Render");
    
    return(
        <>
            <h1>Body of App</h1>
            <Counter count={count} setCount={setCount}></Counter>
        </>
    )
}