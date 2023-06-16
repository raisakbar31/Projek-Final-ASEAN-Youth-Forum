import Cardabout from "../component/card/Cardabout"
import Footer from "../component/footer";
import Navbarr from "../component/Navbarr"
import Qna from "../component/qna/Qna";
import "../style/about.css"

function About() {

    return (
      <>
      <Navbarr/>
      <div className="containerabout">
        <Qna/>
    
        <Footer/>
        </div>

      </>
    )
  }
  
  export default About;
  