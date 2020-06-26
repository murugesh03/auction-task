import React from "react";
import { Card, Button } from "react-bootstrap";
import ContactImage from "../../../assets/michal-parzuchowski-S7nzSaoMQi4-unsplash.png";
import { MdTimer, MdLocationOn } from "react-icons/md";
import { FaTasks, FaUserClock } from "react-icons/fa";
import "./Contact.scss";
const Contact = () => {
  return (
    <Card className="message-card">
      <Card.Img
        variant="top"
        className="mr-auto ml-auto w-50 my-5"
        src={ContactImage}
      />
      <Card.Body>
        <Card.Title className="text-capitalize text-center">
          stephen griffin
        </Card.Title>
        <Card.Text>
          <span>
            <FaUserClock className="mx-2 contact-icon contact-icon-color " />
          </span>
          <span className="text-capitalize contact-icon-color">joined on </span>
          <span>
            <span className="text-capitalize">may </span>
            <span>25</span>
            <span className="ord">th, </span>
            <span>2019</span>
          </span>
        </Card.Text>
        <Card.Text>
          <span>
            <MdTimer className="mx-2 contact-icon contact-icon-color " />
          </span>
          <span className="text-capitalize contact-icon-color">
            avg response time
          </span>
          <span> 08 hrs</span>
        </Card.Text>
        <Card.Text>
          <span>
            <MdLocationOn className="mx-2 contact-icon contact-icon-color" />
          </span>
          <span className="text-capitalize contact-icon-color">location </span>
          <span className="text-capitalize ">california,</span>
          <span className="text-uppercase">us</span>
        </Card.Text>
        <Card.Text>
          <span>
            <FaTasks className="mx-2 contact-icon contact-icon-color" />
          </span>
          <span className="text-capitalize contact-icon-color">jobs hired</span>
          <span className="px-2">25</span>
        </Card.Text>
        <Card.Text className="text-center">
          <Button className="text-uppercase contact-button">
            view react job postings
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Contact;
