import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./components/Home"
import Details from "./components/Details"
export default function App()
{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}>
                    <Route path="Details" element={<Details></Details>}></Route>
                    <Route path="Details/:name" element={<Details></Details>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}