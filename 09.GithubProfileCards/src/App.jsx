import { useEffect } from "react";
import Card from "./components/Card";
import { useState } from "react";


export default function App()
{

    const [users,setUsers] = useState([]);

    useEffect(() => 
    {
      async function Github() 
      {
        try
        {
          const response = await fetch("https://api.github.com/users");
          const data = await response.json();
          setUsers(data);
        }
        catch(error)
        {
          console.log(error); 
        }
      }

      Github();
    },[]);

    return(
      <>
        <h1 style={{textAlign:"center", fontSize:"5rem"}}>Github Profiles</h1>
        <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center", alignItems:"center"}}>
          {users.map(user => <Card key={user.id} profilePic={user.avatar_url} url = {user.html_url} name={user.login}></Card>)}
        </div>
      </>
    )
}