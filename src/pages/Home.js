import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { incrementCounter, decrementCounter, resetCounter, changeCounter} from '../modules/counter/counter.actions';
import { selectActiveTodos } from '../modules/todos/todos.selector';
import { useSelector, useDispatch } from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);
  const todosActive = useSelector(state => selectActiveTodos(state));

  const handleIncrement = () => dispatch(incrementCounter);
  const handleDecrement = () => dispatch(decrementCounter);
  const handleReset = () => dispatch(resetCounter);
  const handleChange = (e) => dispatch((e) => changeCounter(Number(e.target.value)));

  const renderTodos = () => todosActive.map(todo => <div id={todo.id}>{todo.title}</div>);

  return (
    <div>
      <Header />
      <div>
        <h2>Lista aktywnych elementów</h2>
        {renderTodos()}
      </div>
      <div>
        Counter: {counter}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>RESET</button>
        <input value={counter} onChange={handleChange} />
      </div>
      <Footer />
    </div>
  );
}


export default Home;
