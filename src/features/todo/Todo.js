import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button, Checkbox } from "antd";
import { addTodo, removeTodo, toggleTodo, selectTodo } from "./todoSlice";

const Todo = (props) => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <Input
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></Input>
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

      <div>
        <br />
        {todos.map((item, key) => {
          return (
            <div key={key} style={{ flexDirection: "row" }}>
              <Checkbox
                checked={item.completed}
                onChange={() => dispatch(toggleTodo(item.id))}
              ></Checkbox>
              <p
                style={
                  item.completed ? { textDecorationLine: "line-through" } : {}
                }
              >
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
