import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Checkbox, Row, Col, Space, List } from "antd";
import { addTodo, removeTodo, toggleTodo, selectTodo } from "./todoSlice";

const Todo = (props) => {
  const todos = useSelector(selectTodo);
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
          <List
            size="large"
            bordered
            dataSource={todos}
            renderItem={(item) => (
              <List.Item>
                <Space>
                  <Checkbox
                    checked={item.completed}
                    style={
                      item.completed
                        ? { textDecorationLine: "line-through" }
                        : {}
                    }
                    onChange={() => dispatch(toggleTodo(item.id))}
                  >
                    {item.text}
                  </Checkbox>
                </Space>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Todo;
