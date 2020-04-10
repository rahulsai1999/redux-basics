import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, Space, List } from "antd";
import { toggleTodo, selectTodo } from "./todoSlice";

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

export default TabAll;
