import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, emailVerification } =
    useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((res) => {
        setError("");
        form.reset();
        console.log(res.user);
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success(
          "Registration successfully done please verify you email to login"
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
    console.log(accepted);
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailVerification = () => {
    emailVerification()
      .then((res) => {
        console.log("email send for verification");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Photo</Form.Label>
          <Form.Control type="text" name="photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Please accept our
                <Link to="/terms"> terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Form.Text className="text-danger">
          <p>
            <i>{error}</i>
          </p>
        </Form.Text>

        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
<h1>Register</h1>;
