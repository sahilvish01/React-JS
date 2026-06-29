// State Lifting and Prop Drilling

// State Lifting: React mein har component keval apne child ko hi apni state share kar sakta hai isliye jis state ka use hame do ya do se jyada mein ho raha unke sabse nearest ancestor mein uss state ko lift kar do and vaha se jis bhi child component ko uss state ki need hai voh use props ke through pass on kar dega

// Props Drilling: Problem drilling ek problem hai, jab ham props ke through state ko paas karte hai to beech ke jo components jinhe jarurat bhi nahi unn states ki unhe bhi state ko lena padta hai kyuki unke kisi child ko uss state ki need hai aise mein ek state ko change karne mein jo components uss state nahi bhi kar rahe the unhe bhi re-render hona pad raha hai jo ki perfomance kharab kar raha hai

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { useState } from "react";

export default function App()
{

  const [count, setCount] = useState(0);

  return(

    <>
      <Header count={count}/>
      <Body count={count} setCount={setCount}/>
      <Footer/>
    </>

  )
}