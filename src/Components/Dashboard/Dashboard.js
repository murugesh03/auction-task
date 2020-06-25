import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Container>
        <Row className="pb-3">
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
