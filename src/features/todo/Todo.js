import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Row, Col, Space, Tabs } from "antd";

import { addTodo } from "./todoSlice";
import { TabAll, TabToComp, TabLeft } from "./TabComp";

const Todo = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo App</h2>
      <Row>
        <Col span={24}>
          <Space>
            <Input
              placeholder="Enter Todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              type="primary"
              size="middle"
              onClick={() => {
                dispatch(addTodo(text));
                setText("");
              }}
            >
              Add Todo
            </Button>
          </Space>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1" tabPosition="top">
            <Tabs.TabPane tab="All" key="All">
              <TabAll />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Completed" key="Completed">
              <TabToComp />
            </Tabs.TabPane>
            <Tabs.TabPane tab="To Complete" key="To Complete">
              <TabLeft />
            </Tabs.TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Todo;
