import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../modules/todos/todos.actions';

function TodoForm({addTodo}) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <h2>Dodaj todo</h2>
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={handleChange} />
        <button type="submit">Dodaj todo</button>
      </form>
    </div>
  )

}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (value) => dispatch(addTodo(value)),
  }
}

export default connect(null, mapDispatchToProps)(TodoForm)