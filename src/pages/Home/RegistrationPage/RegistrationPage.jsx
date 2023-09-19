import { Button, Form } from "react-bootstrap";
import RegistrationPageStyled from "./RegistrationPage.styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import RootPage from "../../_Root/Root";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);

    const user = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/signup", user);

      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      if (error.response) {
        const registrationErrors =
          error.response.data?.validationErrors?.errors;

        if (registrationErrors) {
          setErrors(
            registrationErrors.map((err) => {
              return {
                field: err.path,
                message: err.msg,
              };
            })
          );
        } else {
          setErrors([error.response.data]);
        }
      } else {
        console.error(error);
      }
      console.log(errors);
    }
  }

  return (
    <RootPage>
    <RegistrationPageStyled.Container>
      <h2 className="text-center">Registration</h2>
      <Form className="d-flex flex-column" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 align-middle" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            isInvalid={errors.username}
          />
          {errors.map((error) => {
            if (
              error.field === "username" ||
              error.message === "A user with that username already exists."
            )
              return (
                <Form.Text className="text-danger p-2" key={error.field}>
                  {error.message}
                </Form.Text>
              );
          })}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={errors.email}
          />
          {errors.map((error) => {
            if (
              error.field === "email" ||
              error.message === "A user with that email already exists."
            )
              return (
                <Form.Text className="text-danger p-2" key={error.field}>
                  {error.message}
                </Form.Text>
              );
          })}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={errors.password}
          />
          {errors.map((error) => {
            if (error.field === "password")
              return (
                <Form.Text className="text-danger p-2" key={error.field}>
                  {error.message}
                </Form.Text>
              );
          })}
          <br />
          <Form.Text className="me-1">Already have an account?</Form.Text>
          <Link to="/signin">Log In</Link>
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </RegistrationPageStyled.Container>
    </RootPage>
  );
};

export default RegistrationPage;
