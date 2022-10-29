import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const pr = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithGoogle(pr).then((res) => {
      console.log(res).catch((err) => {
        console.error(err);
      });
    });
  };
  return (
    <div className="div">
      <div className="login">
        <h5 className="mb-3">Quick Login In</h5>
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSignIn}
            className="mb-2"
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Sign in with Google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
      <div className="social-media">
        <h5 className="mt-4 mb-3">Follow Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram> Instragram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin></FaLinkedin> Linked In
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaGithub></FaGithub> Github
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="brandCarousel">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
<p>right side nav</p>;
