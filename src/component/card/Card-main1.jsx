import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import imagectaforum from "../card/cardimage/image-isu-forum.jpg"
import "./css-card/card-main1.css"

function cardmain1() {
  return (
    <div className="container-card1">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="image-card1" > 
            <Card.Img variant="top" src={imagectaforum}/>
          </Card>
        </Col>
        <Col>
            <Card.Body >
              <Card.Text className="container-text-card1" >
                <div className="titlecard2">Create A Discussion Forum.</div>
                <div className="titlecard3">
                Create information around you and Create Interesting Discussions with Other ASEAN Youths!
                </div>
                <div className="button1" >
                 <a href="#">GET STARTED</a>
                </div>
              </Card.Text>
            </Card.Body>
        </Col>
      </Row>
    </div>
  );
}

export default cardmain1;
