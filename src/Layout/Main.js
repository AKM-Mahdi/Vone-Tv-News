import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SHARED++/Footer/Footer";
import Header from "../Pages/SHARED++/Header/Header";
import LeftSideNav from "../Pages/SHARED++/Left_Side_Nav/LeftSideNav";
import RightSideNav from "../Pages/SHARED++/Right_Side_Nav/RightSideNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row className="pt-5">
          <Col lg="2" className="d-none d-lg-block">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
