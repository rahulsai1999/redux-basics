import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, selectTodo } from "./todoSlice";

const Todo = (props) => {
  const todos = useSelector(selectTodo);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="Enter Todo"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <button onClick={() => dispatch(addTodo(text))}>Add Todo</button>

      <div>
        {todos.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default Todo;
