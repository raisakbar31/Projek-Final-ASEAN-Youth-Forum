import Navbarr from "../component/Navbarr"
import Footer from "../component/footer"
import Cardmain1 from "../component/card/Card-main1"
import Cardartikel from "../component/article/Cardartikel"


// ------css-----------


function Article() {

    return (
      <>
        <Navbarr/>

{/* ================================= */}
<div className="card1">
    <Cardmain1 />
    </div>
    <div className="cardartikel2">
      <Cardartikel/>
    </div>
    <br />
    <div className="footer">
      <Footer/>
    </div>
      </>


    )
  }

  export default Article