import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import TransactionContent from "./TransactionContent/TransactionContent";
import { Row } from "react-bootstrap";
import Buttons from "./Buttons/Buttons";
const TransactionDetails = () => {
  return (
    <Row>
      <ProgressBar />
      <TransactionContent />
      <Buttons />
    </Row>
  );
};

export default TransactionDetails;
