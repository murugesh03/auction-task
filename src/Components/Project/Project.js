import React from "react";
import { Container } from "react-bootstrap";
import ProjectHeading from "./ProjectHeading/ProjectHeading";
import TransactionDetails from "./TransactionDetails/TransactionDetails";
import ProcessBar from "./ProcessBar/ProcessBar";
import Tabs from "./Tabs/Tabs";
const Project = () => {
  return (
    <Container>
      <ProjectHeading />
      <TransactionDetails />
      <ProcessBar />
      <Tabs />
    </Container>
  );
};

export default Project;
