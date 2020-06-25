import React from "react";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { Col } from "react-bootstrap";
const TodoList = () => {
  return (
    <>
      <Col md={5}>
        <div className="todo-list-items">
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            seller accpeted the sales price
          </p>
        </div>
        <div className="todo-list-items">
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            buyer accpeted the sales price
          </p>
        </div>
        <div className="todo-list-items">
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            seller approved closing terms
          </p>
        </div>
        <div className="todo-list-items">
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            buyer approved closing terms
          </p>
        </div>
        <div className="todo-list-items-two">
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            seller provied vesting information
          </p>
        </div>
        <div>
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            buyer provied vesting information
          </p>
        </div>
        <div>
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            seller executed the purchase sale agreement
          </p>
        </div>
        <div>
          <p className="text-capitalize">
            <IoMdRadioButtonOn className="mr-2" />
            buyer executed the purchase sale agreement
          </p>
        </div>
      </Col>
      <Col md={1}>
        <div className="todo-list-items">
          <p>
            <FiCheckCircle />
          </p>
        </div>
        <div className="todo-list-items">
          <p>
            <FiCheckCircle />
          </p>
        </div>
        <div className="todo-list-items">
          <p>
            <FiCheckCircle />
          </p>
        </div>
        <div className="todo-list-items">
          <p>
            <FiCheckCircle />
          </p>
        </div>
      </Col>
    </>
  );
};

export default TodoList;
