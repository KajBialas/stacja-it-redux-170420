import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
// import Todos from './pages/Todos';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { configureStore } from './store';

// const INITIAL_STATE = {
//   counter: 0,
//   todos: [],
// };

// export const ACTION_TYPES = {
//   INCREMENT: 'INCREMENT',
//   DECREMENT: 'DECREMENT',
//   RESET: 'RESET',
//   CHANGE: 'CHANGE',
//   ADD_TODO: 'ADD_TODO',
//   MARK_TODO_COMPLETE: 'MARK_TODO_COMPLETE',
// };

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type){
//     case ACTION_TYPES.INCREMENT:
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }
//     case ACTION_TYPES.DECREMENT:
//       return {
//         ...state,
//         counter: state.counter -1,
//       }
//     case ACTION_TYPES.RESET:
//       return {
//         ...state,
//         counter: INITIAL_STATE.counter,
//       }
//     case ACTION_TYPES.CHANGE:
//       return {
//         ...state,
//         counter: action.payload,
//       }
//     case ACTION_TYPES.ADD_TODO:
//       const newTodoElementId = state.todos.length ? state.todos.length : 0;
//       return {
//         ...state,
//         todos: [...state.todos, {
//           id: newTodoElementId,
//           title: action.payload,
//           completed: false,
//         }]
//       };
//     case ACTION_TYPES.MARK_TODO_COMPLETE:
//       const newTodosArray = [...state.todos];
//       newTodosArray[action.payload].completed = !newTodosArray[action.payload].completed;
//
//       return state = {
//         ...state,
//         todos: newTodosArray,
//       }
//
//     default:
//       return state;
//   }
// };

const store = configureStore();


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
