import React from "react";
import { Col } from "react-bootstrap";
import "./TransactionContent.scss";
const TransactionContent = () => {
  return (
    <Col md={6}>
      <div>
        <p className="text-capitalize mb-0">list by</p>
        <p className="text-capitalize content-text ">capital investments</p>
      </div>
      <div>
        <p className="text-capitalize mb-0">listed price</p>
        <p className="content-text ">$75k</p>
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </Col>
  );
};

export default TransactionContent;
