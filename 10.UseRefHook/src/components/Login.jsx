// Login page using useRef

import { useRef, useState } from "react"

export default function Login()
{
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    let email = useRef("");
    let password = useRef("");
    
    function handleSubmit(e)
    {
        e.preventDefault()
        console.log(email.current.value);
        console.log(password.current.value);
        
        email.current.value = "";
        password.current.value = "";
    }

    return(
        <form onSubmit={handleSubmit} style={{display: "flex",border:"2px solid black", flexDirection: "column", gap: "10px", width: "300px", height: "fit-content",padding:"20px", borderRadius:"10px"}}>
            <div style={{textAlign:"center"}}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" ref={email} placeholder="Enter Email"/>

            </div>

            <div style={{textAlign:"center"}}>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" ref={password} minLength={3} maxLength={10} placeholder="Enter Password"/>
            </div>

            <button type="submit" style={{width:"50%", margin:"auto"}}>Submit</button>

        </form>
    )

}