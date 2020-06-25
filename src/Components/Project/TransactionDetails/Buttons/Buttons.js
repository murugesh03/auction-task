import React from "react";
import { Button, Col } from "react-bootstrap";
import { FiUserX } from "react-icons/fi";
import "./Buttons.scss";
const Buttons = ({ children }) => {
  return (
    <Col md={3}>
      <Button className=" mb-2 text-capitalize add-fee">
        Add fee to transaction
      </Button>
      <Button className="mt-2 mb-2  px-3 text-capitalize abandon">
        abandon transaction
      </Button>
      <Button className="mt-2 px-4 text-capitalize block">
        <FiUserX className="mx-2" />
        block this user
      </Button>
    </Col>
  );
};

export default Buttons;
