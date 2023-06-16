import Card from "react-bootstrap/Card";
import "../style/footer.css"

function Footer() {
  return (
    <Card bg="dark" text="white" className="text-center footer">
      <Card.Body className="container-footer">
        <Card.Title className="title-footer">
          <h1>ASEAN Youth Forum</h1>
        </Card.Title>
        <Card.Text className="text-footer">
          The ASEAN Youth Forum (AYF) is a dynamic platform that empowers young
          people in the ASEAN region to engage in meaningful dialogue,
          cooperation, and action. As a member of the AYF, you can develop your
          leadership skills, expand your network, and contribute to building a
          more united and prosperous ASEAN community. Through a range of
          activities, such as dialogues, training sessions, and community
          projects, the AYF provides opportunities for young people to share
          their ideas, experiences, and perspectives, and to work together
          towards common goals. Join the AYF today and be part of the vibrant
          and diverse community of young ASEAN leaders shaping the future of our
          region!
        </Card.Text>
        <ul class="socials">
             <li><a href="https://www.facebook.com/rais.akbar3110/"><i class="fa fa-facebook"></i></a></li>
             <li><a href="https://github.com/raisakbar31"><i class="fa fa-github"></i></a></li>
             <li><a href="https://www.youtube.com/@RAISSUND"><i class="fa fa-youtube"></i></a></li>
             <li><a href="https://www.instagram.com/sikang_is/?hl=id"><i class="fa fa-instagram"></i></a></li>
         </ul>
      </Card.Body>
      <Card.Footer className="text-muted"  >
        <p>
          copyright &copy; <a href="#">sikang_is</a>{" "}
        </p>
      </Card.Footer>
    </Card>
  );
}

export default Footer;
