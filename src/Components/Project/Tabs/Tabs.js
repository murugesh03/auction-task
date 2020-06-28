import React, { useState } from "react";
import { Tabs, Row, Col, Tab } from "react-bootstrap";
import Todo from "../ToDo/Todo";
import "./Tabs.scss";
const TabsView = () => {
  const [key, setKey] = useState("todo");
  return (
    <Row>
      <Col>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="tabs"
        >
          <Tab eventKey="home" title="TELE-COMMUNICATION"></Tab>
          <Tab eventKey="todo" title="TO-DO">
            <Todo />
          </Tab>
          <Tab eventKey="mortgage notes" title="MORTGAGE NOTES"></Tab>
          <Tab eventKey="files" title="FILES"></Tab>
          <Tab eventKey="due dilligence" title="DUE DILLIGENCE"></Tab>
          <Tab eventKey="metadata" title="METADATA"></Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default TabsView;
