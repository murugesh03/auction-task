import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar/Sidebar";
import Message from "./Message/Message";
import Contact from "./Contact/Contact";
import DashboardFooter from "./DashboardFooter/DashboardFooter";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <>
      <div className="d-flex dashboard-background">
        <Sidebar />
        <Container>
          <Row className="pt-4">
            <Col md={9}>
              <Message />
            </Col>
            <Col md={3}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
      <DashboardFooter />
    </>
  );
};

export default Dashboard;
