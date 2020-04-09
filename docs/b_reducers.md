## Reducers

- Reducers specify how to change the application's state, change in response to actions sent to the store. A reducer is always a pure function i.e. same input gives same output.

- Things you should never do inside a reducer:
  - Mutate its arguments;
  - Perform side effects like API calls and routing transitions;
  - Call non-pure functions, e.g. Date.now() or Math.random().

```js
import { combineReducers } from "redux";

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    //pushes new task into the state array
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    //toggles the task as completed or not completed
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
```
