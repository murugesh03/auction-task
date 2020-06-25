import React from "react";
import { Row, Col } from "react-bootstrap";
import "./ProjectHeading.scss";

const ProjectHeading = () => {
  return (
    <Row>
      <Col className="m-5">
        <p className="h3 text-uppercase text-center heading-underline">
          project status
        </p>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. when an unknown printer took a galley of type and scrambled
          it to make a type specimen book.
        </p>
      </Col>
    </Row>
  );
};

export default ProjectHeading;
