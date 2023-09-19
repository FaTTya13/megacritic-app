import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  ListGroup,
  ListGroupItem,
  NavLink,
  Image,
} from "react-bootstrap";
import Cookies from "universal-cookie";

const Header = () => {
  const avatar = require("./default_avatar.png");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the search query to the server
  };

  const cookies = new Cookies();
  const isLoggedIn = cookies.get("token");

  const handleLogOut = () => {
    cookies.remove('token')
    navigate("/");
  }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`/api/search?query=${query}`);
  //       const data = await response.json();
  //       setResults(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, [query]);

  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">megacritic</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/games">GAMES</Nav.Link>
          <Nav.Link href="/movies">MOVIES</Nav.Link>
          <Nav.Link href="/tv">TV</Nav.Link>
          <Nav.Link href="/music">MUSIC</Nav.Link>
        </Nav>
        <Form onSubmit={handleSubmit} className="d-flex me-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {results && (
            <ListGroup>
              {results.map((result) => (
                <ListGroupItem key={result.id}>
                  <a href={`/reviews/${result.reviewId}`}>{result.title}</a>
                  <p>{result.description}</p>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
          <Button variant="outline-light" disabled={query.length < 3}>
            Search
          </Button>
        </Form>
        {isLoggedIn ? (
          <Nav>
            <NavLink href="/profile">
              <Image src={avatar} rounded />
            </NavLink>
            <Button onClick={handleLogOut} variant="outline-light" className="ms-2">
              Log out
            </Button>
          </Nav>
        ) : (
          <Button href="/signin" variant="outline-light">
            Sign In
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
