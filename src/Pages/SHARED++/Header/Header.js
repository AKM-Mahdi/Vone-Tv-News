import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import LeftSideNav from "../Left_Side_Nav/LeftSideNav";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, signOutFromWebsite } = useContext(AuthContext);
  // console.log(user);

  const handleSignOut = () => {
    signOutFromWebsite();
  };
  // console.log(user.displayName);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Vone_Tv_News</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>

              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {user?.uid ? (
              <Nav>
                <NavDropdown
                  title={
                    user?.photoURL ? (
                      <Image
                        roundedCircle
                        style={{ height: "35px" }}
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUserCircle></FaUserCircle>
                    )
                  }
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item>{user?.displayName}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleSignOut}>
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav className="me-end">
                <Nav.Link>
                  <Link className="text-light" to={"/login"}>
                    Login
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="text-light" to={"/register"}>
                    Register
                  </Link>
                </Nav.Link>
              </Nav>
            )}

            <div className="categoryForMobile d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
<p>top header</p>;
