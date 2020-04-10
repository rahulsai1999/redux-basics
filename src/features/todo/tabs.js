import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Space, List } from "antd";

import {
  toggleTodo,
  selectTodo,
  selectTodoComp,
  selectTodoLeft,
} from "./todoSlice";

const TabAll = (props) => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  return (
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
                item.completed ? { textDecorationLine: "line-through" } : {}
              }
              onChange={() => dispatch(toggleTodo(item.id))}
            >
              {item.text}
            </Checkbox>
          </Space>
        </List.Item>
      )}
    />
  );
};
const TabToComp = (props) => {
  const todos = useSelector(selectTodoComp);
  const dispatch = useDispatch();
  return (
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
                item.completed ? { textDecorationLine: "line-through" } : {}
              }
              onChange={() => dispatch(toggleTodo(item.id))}
            >
              {item.text}
            </Checkbox>
          </Space>
        </List.Item>
      )}
    />
  );
};
const TabLeft = (props) => {
  const todos = useSelector(selectTodoLeft);
  const dispatch = useDispatch();
  return (
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
                item.completed ? { textDecorationLine: "line-through" } : {}
              }
              onChange={() => dispatch(toggleTodo(item.id))}
            >
              {item.text}
            </Checkbox>
          </Space>
        </List.Item>
      )}
    />
  );
};

export { TabAll, TabToComp, TabLeft };
