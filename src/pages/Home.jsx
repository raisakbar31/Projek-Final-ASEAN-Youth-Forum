
import Navbarr from "../component/Navbarr"
import Header from "../component/Header"
import Caroselheader from "../component/Carosel-header"
import Qna from "../component/qna/Qna"
import Cardmain1 from "../component/card/Card-main1"
import Footer from "../component/footer"

// ------css-----------
import "../style/home.css"

function Home() {

    return (
      <>
        <Navbarr/>

        <div className='header' >
<Header />
</div>
{/* ======================== */}
<div className="conten1">
    <Caroselheader />
    </div>
{/* ================================= */}
<div className="card1">
    <Cardmain1 />
    </div>
    <div className="qna">
     <Qna/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
      </>


    )
  }
  
  export default Home
  