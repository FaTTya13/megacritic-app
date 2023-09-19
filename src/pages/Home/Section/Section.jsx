import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";

const Section = () => {
    return (
        <Navbar bg="light" variant="light">
    <Container>
        <Navbar.Text>New releases in Cinemas</Navbar.Text>
        <Form className="d-flex me-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
    </Container>
    </Navbar>
    );
};

export default Section;