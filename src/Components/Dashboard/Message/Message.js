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
import uuid from "react-uuid";
import moment from "moment";
import ChatList from "./ChatList/ChatList";
import { dataMessage } from "../../../Data";
import "./Message.scss";
const Message = () => {
  const [message, setMessage] = useState(dataMessage);
  const [inputMessage, setInputMessage] = useState("");

  const submitMessage = (event) => {
    let messageCopy = [...message];
    messageCopy.push({
      message: inputMessage,
      type: "sender",
      time: moment().format("LT"),
      id: uuid(),
    });
    setMessage(messageCopy);
    setInputMessage("");
  };
  console.log(message);
  return (
    <Row>
      <Col md={2}>
        <Card className="message-card">
          <ChatList />
        </Card>
      </Col>
      <Col md={10}>
        <Card className="message-card">
          <div className="px-3 pt-3 message">
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
            <InputGroup className="message-input">
              <InputGroup.Prepend>
                <Button className="message-button" variant="outline-secondary">
                  <IoIosAttach className="message-attachement" />
                </Button>
              </InputGroup.Prepend>
              <FormControl
                className="message-input-box"
                placeholder="Type a message..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={inputMessage}
                type="sender"
                name="message"
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <InputGroup.Append>
                <Button
                  onClick={(e) => submitMessage(e)}
                  className="message-button"
                  variant="outline-secondary"
                >
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
