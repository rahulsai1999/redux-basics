import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, selectTodo } from "./todoSlice";

const Todo = (props) => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        Add Todo
      </button>

      <div>
        {todos.map((item) => {
          return <p onClick={() => dispatch(removeTodo(item))}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Todo;
