import React from "react";
import { Navbar, Container, Row, Col, Nav, NavbarBrand } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar expand="xl" variant="dark" bg="dark" >
      <Container>
        <Row>
          <Col>
            <NavbarBrand>Megacritic</NavbarBrand>
            <Nav className="list-unstyled">
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">Advertise</Nav.Link>
              <Nav.Link href="#">Jobs</Nav.Link>
            </Nav>
          </Col>
          <Col>
          <NavbarBrand>Socials</NavbarBrand>
          <Nav className="list-unstyled">
              <Nav.Link href="#">Twitter</Nav.Link>
              <Nav.Link href="#">Instagram</Nav.Link>
              <Nav.Link href="#">Facebook</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
