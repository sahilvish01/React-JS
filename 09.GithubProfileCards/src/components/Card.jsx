
export default function Card({profilePic, url, name})
{
    return(
        <div style={{border: "2px solid black", width:"fit-content", padding: "30px", margin:"30px", borderRadius:"10px", display:"flex", flexDirection:"column", gap:"10px", alignItems: "center", backgroundColor:"lightcyan"}}>
            <img src={profilePic} alt={"User Image"} height={"250px"} width={"250px"} style={{borderRadius:"10px"}}/>
            <h3>Username: {name}</h3>
            <button style={{width:"180px", height:"30px", border:"3px solid", borderRadius:"10px", fontSize:"1.2rem", fontWeight:500}}><a href={url} style={{textDecoration:"none", color:"black"}}>See Profile</a></button>
        </div>
    )
}