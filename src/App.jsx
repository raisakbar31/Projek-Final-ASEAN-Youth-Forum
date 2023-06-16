
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Article from "./pages/Article"
import About from "./pages/About"
import Information from "./pages/Information"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <>
    {/* <link to="/" >Home</link>
    <link to="/About" >About</link>
    <link to="/Article" >Article</link>
     */}
<Routes>
<Route  path="/" element={<Home/>} />
  <Route  path="Home" element={<Home/>} />
  <Route  path="Article" element={<Article/>} />
  <Route  path="About" element={<About/>}/>
  
  <Route  path="Information" element={<Information/>}/>
  <Route  path="Login" element={<Login/>}/>
  <Route  path="Register" element={<Register/>}/>
  <Route  path="/*" element={<NotFound/>}/>
</Routes>
    </>
  );
}

export default App
