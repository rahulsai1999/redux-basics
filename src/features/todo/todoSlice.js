import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    addTodo: (state, action) => {
      let id = state.todos.length;
      state.todos.push({ id: ++id, text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
      const index = action.payload - 1;
      state.todos.splice(index, 1);
    },
    toggleTodo: (state, action) => {
      const index = action.payload;
      let x = state.todos.findIndex((obj) => obj.id === index);
      state.todos[x].completed = !state.todos[x].completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// state.<name of action/slice>.<name of variable given in initial state>
export const selectTodo = (state) => state.todo.todos;

export default todoSlice.reducer;
