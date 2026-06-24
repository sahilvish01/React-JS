import React from "react";

// Sum of first 1000000000 numbers

// export default function Sum()


const Sum = React.memo(() => {

    {console.log("Hello")}      

    let sum = 0;

    for(let i = 1; i <= 1000000000; i++)
    {
        sum += i;
    }

    return(
      <>
        <h1>Sum: {sum}</h1>
      </>
    )
})


// const Sum = () => {

//     {console.log("Hello")}      

//     let sum = 0;

//     for(let i = 1; i <= 1000000000; i++)
//     {
//         sum += i;
//     }

//     return(
//       <>
//         <h1>Sum: {sum}</h1>
//       </>
//     )
// }

export default Sum;
