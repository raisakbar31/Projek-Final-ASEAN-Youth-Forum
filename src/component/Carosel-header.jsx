import Carousel from 'react-bootstrap/Carousel';
import isu1 from "../image/isu/isu1.jpg"
import isu2 from "../image/isu/isu2.jpeg"
import isu3 from "../image/isu/isu3.jpg"
import "../style/Carosel-header.css"

function Caroselheader() {
  return (
    <div className="container">
    <Carousel variant="light" className='container-carosel'>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carosel "
          src={isu1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carosel"
          src={isu2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image-carosel"
          src={isu3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Caroselheader;