import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { IoIosAttach, IoMdSend } from "react-icons/io";
import ChatList from "./ChatList/ChatList";
import { dataMessage } from "../../../Data";
import "./Message.scss";
const Message = () => {
  const [message, setMessage] = useState(dataMessage);

  const addMessage = (data, type, time) => {
    let messageCopy = message;
    messageCopy.push({ message, type, time });
    setMessage(messageCopy);
  };

  console.log(message);
  return (
    <Row>
      <Col md={2}>
        <Card>
          <ChatList />
        </Card>
      </Col>
      <Col md={10}>
        <Card>
          <div className="px-3 message">
            {message.map((m, i) => (
              <div
                className={
                  m.type === "received" ? "message-left" : "message-right"
                }
                key={m.message}
              >
                <p
                  className={
                    m.type === "received"
                      ? "message-sender"
                      : "message-receiver"
                  }
                >
                  {m.message}
                </p>
                <p className="message-time">{m.time}</p>
              </div>
            ))}
          </div>
          <div>
            <InputGroup>
              <InputGroup.Prepend>
                <Button className="message-button" variant="outline-secondary">
                  <IoIosAttach className="message-attachement" />
                </Button>
              </InputGroup.Prepend>
              <FormControl
                className="message-input"
                placeholder="Type a message..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button className="message-button" variant="outline-secondary">
                  <IoMdSend className="message-send" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default Message;
