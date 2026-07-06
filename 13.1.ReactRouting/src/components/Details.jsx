import { Outlet, Link } from "react-router";

export default function Details()
{
    return(
        <>
            <nav>
                <Link to="Child1">Child1</Link>
                <Link to="Child2">Child2</Link>
                <Link to="Child3">Child3</Link>
            </nav>
            <h1>This is details section</h1>
            <Outlet></Outlet>
        </>
    )
}