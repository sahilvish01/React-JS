import Display from "./Display"

export default function Header({count})
{
    console.log("Header Render");
    
    return(
        <div style={{color:"white",height:"150px", backgroundColor:"black",display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h2>App Name</h2>
            <Display count={count}/>
        </div>
    )
}