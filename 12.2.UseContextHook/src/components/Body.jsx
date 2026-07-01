import { memo } from "react";
import Counter from "./Counter"

const Body = memo(() =>
{
    console.log("Body Render");
    
    return(
        <>
            <h1>Body of the App</h1>
            <Counter></Counter>
        </>
    )
})


export default Body;