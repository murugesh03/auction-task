import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <Container>
          <Row className="dashboard-background pt-4">
            <Col md={8}>
              <Message />
            </Col>
            <Col md={4}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
