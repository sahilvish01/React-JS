import { createRoot } from "react-dom/client"
// import React from "react"                       // Ye likhne ki bhi jarurat nahi hamare folder mein jo vite.config.js file hai voh sab configure karke rakhta hai and jitna react hame use hoga utna hi voh hame code deta hai
import Home, {About} from './Home.jsx'


// Home -> default export isliye bina curly braces ke import kar liya 
// About -> Named export hai isliye "{}" lagaya import karte samay


const root = createRoot(document.getElementById("root"));

function App()
{
    let name = "Sahil";

    return (
        <>
            <h1>Hello {name}</h1>
            <h1>How are you ?</h1>
            
            <Home></Home>
            <About></About>
        </>
    )
}

root.render(<App></App>)

// dist folder mein jo code hai voh production ready hai

// iss folder ko bas utha kar netlify par daal do ye deploy ho jayega