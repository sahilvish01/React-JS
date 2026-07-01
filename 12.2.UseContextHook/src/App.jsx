// useContext Hook: 

// useContext Hook -> Propdrilling ki problem ko solve karta hai, Ye jis jis child component ko state ki need hai uske nearest ancesstor mein ek context ko create kar deta hai jo as a global varibale ka kaam karte hai, jis component ko us state ki jarurat hogi voh componet uss state ko consume karke use kar sakte hai, useContext se jaha jaha uss state ka use hua hai keval vahi component rerender honge 

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createContext } from "react"
import { useState } from "react";

export const CountContext = createContext();    // Producer

export default function App()
{
  const [count,setCount] = useState(0);

  return(
    <CountContext value={{count,setCount}}>
      <Header/>
      <Body/>
      <Footer/>
    </CountContext>
  )
}