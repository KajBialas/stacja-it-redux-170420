import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';

const INITIAL_STATE = {
  counter: 0,
};

export const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE: 'CHANGE',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        counter: state.counter -1,
      }
    case ACTION_TYPES.RESET:
      return {
        ...state,
        counter: INITIAL_STATE.counter,
      }
    case ACTION_TYPES.CHANGE:
      return {
        ...state,
        counter: action.payload,
      }

    default:
      return state;
  }
};

const store = createStore(reducer);


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
