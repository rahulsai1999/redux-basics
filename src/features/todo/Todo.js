import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Row, Col, Space } from "antd";
import { addTodo } from "./todoSlice";

import TabAll from "./tabs";

const Todo = (props) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Todo App</h2>
      <Row>
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
      </Row>
      <br />
      <Row>
        <Col span={24}>
          <TabAll />
        </Col>
      </Row>
    </div>
  );
};

export default Todo;
