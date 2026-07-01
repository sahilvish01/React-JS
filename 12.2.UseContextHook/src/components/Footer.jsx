import { memo } from "react";

const Footer = memo(() =>
{
    console.log("Footer Render");
    
    return(
        <>
            <h1>This the footer of App</h1>
        </>
    )
})


export default Footer;