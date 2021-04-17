import { combineReducers } from 'redux';
import counterReducer from './counter/counter.reducer';
import todosReducer from './todos/todos.reducer';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});