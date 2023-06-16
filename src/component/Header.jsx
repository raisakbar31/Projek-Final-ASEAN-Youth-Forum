import "../style/header-index.css"

import { useNavigate } from "react-router-dom"



function Header() {
  const navigate=useNavigate()
  return (
  <div className="container-header">
<div className="title-header">
ASEAN Youth Forum
<div className="title-header2">
A movement that represents the youth in ASEAN to voice out their concerns and strategise for ways to achieve a better ASEAN Community.
</div>
<div className="button1"  >
  <a href="About" >GET STARTED</a>
</div>
</div>
</div>
  );
}

export default Header;