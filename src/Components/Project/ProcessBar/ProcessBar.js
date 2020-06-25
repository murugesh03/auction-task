import React from "react";
import { Row, Col } from "react-bootstrap";
import Seller from "../../../assets/afro-bangkok-blazer-1638419.png";
import Buyer from "../../../assets/iler-stoe-iEAvKBfqD8c-unsplash.png";
import "./ProcessBar.scss";
const ProcessBar = () => {
  return (
    <Row>
      <Col>
        <div className="seller">
          <img src={Seller} alt="seller" />
          <p className="text-capitalize mb-0 text-center">jack sparrow</p>
          <p className="text-uppercase text-center">seller</p>
        </div>
      </Col>

      <hr className="processbar-dash" />

      <Col>
        <div className="buyer">
          <img src={Buyer} alt="buyer" />
          <p className="text-capitalize mb-0 text-center">daniel s</p>
          <p className="text-uppercase text-center">
            buyer <span>(broker)</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ProcessBar;