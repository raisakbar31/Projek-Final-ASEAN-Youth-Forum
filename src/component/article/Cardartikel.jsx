import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import imageartikel1 from "../card/cardimage/article1.jpg"

import "./cardartikel.css"

function GridExample() {
  return (
    <>
    <div className="cardartikeltitle">
      <center>
        <hr />
      <h1>
        Artikel Trending
      </h1>
      <hr /><br />
      </center>
    </div>
    <div className="containelcard2">
    <Row xs={1} md={3} className="g-8" >
      {Array.from({ length: 6 }).map((_, idx) => (
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
            </Card.Body>
          </Card>
        </Col>
      ))}
      
    </Row>
    </div>
    </>
  );
}

export default GridExample;
