import { useNavigate } from "react-router-dom"

import (useNavigate)

const Navbar =() => {
const navigate=useNavigate()

    return (
      <>
        <h1>ini navbar</h1>
        <button onClick={ () => navigate("About")} >cek about</button>
        <button onClick={ () => navigate("Home")} >cek about</button>
        <button onClick={ () => navigate("Article")} >cek article</button>
      </>
    )
    }
  export default Navbar

  
  