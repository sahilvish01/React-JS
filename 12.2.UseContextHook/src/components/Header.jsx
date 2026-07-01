import { memo } from "react";
import Display from "./Display"

const Header = memo(() =>
{
    console.log("Header Render");
    
    return(
        <div style={{backgroundColor:"black",color:"white",height:"150px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h1>App Name</h1>
            <Display></Display>
        </div>
    )
})

export default Header;