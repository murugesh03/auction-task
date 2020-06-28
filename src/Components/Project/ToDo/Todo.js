import React from "react";
import "./Todo.scss";
import { GiConversation } from "react-icons/gi";
import { MdLockOutline } from "react-icons/md";
import { Container, Row, Col } from "react-bootstrap";
import TodoList from "./../TodoList/TodoList";
const Todo = () => {
  return (
    <Container>
      <Row className="todo-list my-5">
        <Col className="pr-0 todo-tab " md={12}>
          <div className="todo-tab-box">
            <span>
              <GiConversation className=" todo-tab-box-icon" />
            </span>
          </div>
          <hr className="hr-line" />
          <div className="todo-tab-box">
            <span>
              <MdLockOutline className="  todo-tab-box-icon" />
            </span>
          </div>
        </Col>
        <Col className="todo-tab-box-name" md={12}>
          <div>
            <p className="text-uppercase my-2 ">negotiation phase</p>
          </div>
          <div>
            <p className="text-uppercase my-2 ">closing phase</p>
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
