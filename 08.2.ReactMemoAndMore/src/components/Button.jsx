import React from "react";

const Button = React.memo(({handleCount}) => 
{
    console.log("Rerender");
    
    return <button onClick={handleCount}>Increment</button>
})

export default Button;