# Redux Basics

- Redux allows us to store the state of the application under a single **store** which is accessible for all components.
- This reduces the need for complex state logic and large props to be passed down to components.

## Core Concepts

| Term    | Definition                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| State   | Any data (I/O) and neccesary to run the application's components                                                                                                                                        |
| Store   | State of the application stored in a single place as a plain JS object model, with no setters available i.e the state inside is read only, and the only way to change is to emit or dispatch an action. |
| Action  | To change something in the state(inside the store), an action has to be dispatched, which is a plain JS object that has a type of action, and the payload associated with this action.                  |
| Reducer | To tie the state and actions together, we need a pure function i.e. a reducer. This function takes the state and actions as arguments and returns the next state of the app.                            |

### Actions

- Payloads of information which send the data for the state from the application to the store.
- Actions must have a type property, typically defined as string constants.

```js
// defining the type of action
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE TODO";

//example of an action with the type and payload
const actionExA = {
  type: ADD_TODO,
  text: "New Redux",
};
const actionExB = {
  type: TOGGLE_TODO,
  index: 5,
};
```

### Action Creators

- Action creators are functions that create actions and return them.
- Initiate a dispatch, to send the action.
- Bound action creator is a function that can automatically dispatch the action to the store.
- The dispatch() function can be accessed directly from the store as store.dispatch(), but more likely you'll access it using a helper like react-redux's connect().
- You can use bindActionCreators() to automatically bind many action creators to a dispatch() function.

```js
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};
const completeTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index,
  };
};

dispatch(addTodo(text));
dispatch(completeTodo(index));
```
