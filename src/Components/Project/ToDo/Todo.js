import React from "react";
import "./Todo.scss";
import { GiConversation } from "react-icons/gi";
import { MdLockOutline } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import TodoList from "./../TodoList/TodoList";
const Todo = () => {
  return (
    <Container>
      <Row className="todo-list">
        <Col className="pr-0 todo-tab " md={8}>
          <div className="todo-box">
            <span>
              <GiConversation className=" todo-box-icon" />
              <p className="text-uppercase ">negotiation phase</p>
            </span>
          </div>

          <hr className="hr-line" />

          <div className="todo-box">
            <span>
              <MdLockOutline className="  todo-box-icon" />
              <p className="text-uppercase ">closing phase</p>
            </span>
          </div>
        </Col>
      </Row>
      <Row className="todo-list">
        <TodoList />
      </Row>
    </Container>
  );
};

export default Todo;
