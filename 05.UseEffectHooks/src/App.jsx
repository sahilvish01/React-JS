import { useEffect, useState } from "react";
 
// Wrong Way: It will be called recurively

// export default function App()
// {

//     // const [users, setUsers] = useState([]);

//     // async function GithubUsers() 
//     // {
//     //     const response = await fetch("https://api.github.com/users");
//     //     const data = await response.json();
//     //     setUsers(data);
//     //     console.log("Hello");
        
//     // }

//     // GithubUsers();
    

//     return(
//         <>
//             <h1>Github Users</h1>

//             {users.map(user => <img href={user.avatar_ur} height={"100px"} width={"100px"} key={user.id}/> )}

            
//         </>
//     )

// }


// Right Way : Use useEffect()

// useEffect is called automatically for first render only.
// useEffect is excecuted at the of the execution of that component.
// It will not executed in each render automatically.
// It will executed again if the value of dependency array is changed.

// export default function App()
// {

//     const [users, setUsers] = useState([]);

//     useEffect(() =>
//     {
//         async function GithubUsers(params) 
//         {
//             const response = await fetch("https://api.github.com/users");
//             const data = await response.json();
//             setUsers(data);
//             console.log("Hello");
//         }

//         GithubUsers();
//     },[]);

//     return(
//         <>
//             <h1>Github Users</h1>
//             {
//                 users.map(user => <img src={user.avatar_url} height={"100px"} width={"100px"}/>)
//             }
//         </>
//     )
// }



// Now search How many Github user you want to see

export default function App()
{

    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(10);

    useEffect(() => 
    {
        async function GithubUsers()
        {
            let response = await fetch(`https://api.github.com/users?per_page=${count}`);
            let data = await response.json();
            setUsers(data);
        }

        GithubUsers();

    },[count]);

    function setCards(e)
    {
        setCount(e.target.value);
    }

    return (
        <>
            <h1>Github Users</h1>
            <input type="number" onChange={setCards} value={count} style={{display:"inline-block", margin: "auto"}}/>
            
            <div style={{display: "flex", gap: "20px", justifyContent: "space-evenly", flexWrap: "wrap", maxWidth: "1500px", margin: "auto", marginTop: "100px"}}>
                {
                    users.map(user => <img src={user.avatar_url} height={"250px"} width={"250px"} key={user.id}/>)
                }
            </div>
        </>
    )
}