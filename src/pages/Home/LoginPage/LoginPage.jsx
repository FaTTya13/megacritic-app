import { Button, Form } from "react-bootstrap";
import LoginPageStyled from "./LoginPage.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RootPage from "../../_Root/Root";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

 
    try {
      const response = await axios.post("http://localhost:5000/signin", user);

      if (response.status === 200) {
        props.onSuccess(response.data);
        navigate("/");
      } else {
        props.onFail();
      }
    } catch (error) {
      console.error("There was an error!", error);
    };
  }

  return (
    <RootPage>
      <LoginPageStyled.Container>
        <h2 className="text-center">Login</h2>
        <Form className="d-flex flex-column" onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="me-1">Don’t have an account?</Form.Text>
            <Link to="/signup">Create an account</Link>
          </Form.Group>
          <Button variant="dark" type="submit">
            Log In
          </Button>
        </Form>
      </LoginPageStyled.Container>
    </RootPage>
  );
};

export default LoginPage;
