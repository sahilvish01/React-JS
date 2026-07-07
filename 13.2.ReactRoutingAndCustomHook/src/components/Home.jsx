import { Outlet } from "react-router"
export default function Home()
{
    return(
        <>
            <h1>This is Home</h1>
            <Outlet></Outlet>
        </>        
    )
}