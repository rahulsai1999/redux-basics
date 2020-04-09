## Actions

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

## Action Creators

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
