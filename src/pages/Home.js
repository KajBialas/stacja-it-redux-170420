import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../index';

function Home({ counter, increment, decrement, reset, change, todos}) {
  const renderTodos = () => todos.map(todo => !todo.completed ? <div id={todo.id}>{todo.title}</div> : null);
  return (
    <div>
      <Header />
      <div>
        <h2>Lista aktywnych elementów</h2>
        {renderTodos()}
      </div>
      <div>
        Counter: {counter}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>RESET</button>
        <input value={counter} onChange={(e) => change(Number(e.target.value)) } />
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    counter: state.counter,
    todos: state.todos,
  })
};

const mamDispatchToProps = dispatch => {
  return ({
    increment: () => dispatch({type: ACTION_TYPES.INCREMENT}),
    decrement: () => dispatch({type: ACTION_TYPES.DECREMENT}),
    reset: () => dispatch({type: ACTION_TYPES.RESET}),
    change: (value) => dispatch({
      type: ACTION_TYPES.CHANGE,
      payload: value,
    })
  });
};

export default connect(mapStateToProps, mamDispatchToProps)(Home);
