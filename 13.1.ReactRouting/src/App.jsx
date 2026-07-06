import Home from "./components/Home"
import About from "./components/About"
import Details from "./components/Details"
import {BrowserRouter, Routes, Route, Link} from "react-router"
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"
import Child3 from "./components/Child3"

export default function App()
{
  return(

    <BrowserRouter>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Details">Details </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Details" element={<Details/>}>
              <Route path="Child1" element={<Child1></Child1>}></Route>
              <Route path="Child2" element={<Child2></Child2>}></Route>
              <Route path="Child3" element={<Child3></Child3>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>

  )
}