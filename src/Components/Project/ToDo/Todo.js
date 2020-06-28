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
          <div className="todo-tab-box todo-tab-color-one">
            <span>
              <GiConversation className=" todo-tab-box-icon  todo-tab-box-icon-one" />
            </span>
          </div>
          <hr className="hr-line" />
          <div className="todo-tab-box todo-tab-color-two">
            <span>
              <MdLockOutline className="  todo-tab-box-icon  todo-tab-box-icon-two" />
            </span>
          </div>
        </Col>
        <Col className="todo-tab-box-name " md={12}>
          <div className="todo-tab-color-one">
            <p className="text-uppercase my-2 ">negotiation phase</p>
          </div>
          <div className="todo-tab-color-two">
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
