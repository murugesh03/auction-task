import React from "react";
import { Row, Col } from "react-bootstrap";
import Seller from "../../../assets/afro-bangkok-blazer-1638419.png";
import Buyer from "../../../assets/iler-stoe-iEAvKBfqD8c-unsplash.png";
import { FaHome } from "react-icons/fa";
import "./ProcessBar.scss";
const ProcessBar = () => {
  return (
    <Row className="processbar">
      <Col className="processbar-img">
        <div className="seller">
          <img src={Seller} alt="seller" />
        </div>
        <span className="processbar-img-icon">
          <FaHome />
        </span>
        <hr className="processbar-dash" />
        <div className="buyer">
          <img src={Buyer} alt="buyer" />
        </div>
      </Col>

      <Col className="processbar-text">
        <div className="processbar-text-one">
          <p className="text-capitalize mb-0 text-center seller-name">
            jack sparrow
          </p>
          <p className="text-uppercase text-center">seller</p>
        </div>
        <div className="processbar-text-two">
          <p className="text-capitalize mb-0 text-center buyer-name">
            daniel s
          </p>
          <p className="text-uppercase text-center">
            buyer{" "}
            <span className="buyer-name-position text-capitalize">
              (broker)
            </span>
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default ProcessBar;
