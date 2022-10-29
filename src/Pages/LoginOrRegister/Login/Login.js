import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
<h2>login</h2>;
