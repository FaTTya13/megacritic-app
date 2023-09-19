import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NaviBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand>Web App</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/users"
                >
                  Users
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/about"
                >
                  About
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary" className="me-2">
                Log In
              </Button>
              <Button variant="primary">Sign out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NaviBar;
