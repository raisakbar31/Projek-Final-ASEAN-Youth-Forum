import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logoimage from "../image/favicon.png"
import "../style/Navbar.css"
// =================navigasi




function NavScrollExample() {
  return (
    <div className="container-navbar">
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container fluid>
      <Navbar.Brand href="#home">
         <img src={Logoimage} alt="Your SVG"
         width="30"
         height="30"
         className="d-inline-block align-top logo-navbar logo-navbar" 
         />
       ASEAN Youth Forum
  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 menu"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav.Link href="Home">Dashboard</Nav.Link>
            <Nav.Link href="Article">Article</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Information">Information</Nav.Link>
            <NavDropdown title="Option" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Login">Login</NavDropdown.Item>
              <NavDropdown.Item href="Register">
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Developer
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <div className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}


export default NavScrollExample;