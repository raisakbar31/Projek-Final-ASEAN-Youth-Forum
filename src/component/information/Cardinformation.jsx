import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import imageartikel1 from "../card/cardimage/article1.jpg"

import "./Cardinformation.css"

function Cardinformation() {
  return (
    <>
    <div className="cardartikeltitle">
      <center>
        <hr />
      <h1>
        Information Forum
      </h1>
      <hr /><br />
      </center>
    </div>
    <div className="containelcard2">
    <Row xs={1} md={4} className="g-8" >
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card className="articleimage">
            <Card.Img variant="top" src={imageartikel1} />
            <Card.Body>
              <Card.Title> Demos in Indonesia </Card.Title>
              <Card.Text>
                Political participation is defined as the activities of
                citizens, including young people aged 15-30 years, with the
                intention of influencing government action, either directly by
                providing input...
              </Card.Text>
              <center>
              <button className="button2" >lihat forum ini</button></center>
            </Card.Body>
          </Card>
        </Col>
      ))}
      
    </Row>
    </div>
    </>
  );
}

export default Cardinformation;
