import React from 'react';
import { connect } from 'react-redux';
import { markTodoComplete } from '../modules/todos/todos.actions';
import { selectTodos } from '../modules/todos/todos.selector';

function TodosList({ todos, markTodo }) {

  const renderTodos = () => todos.map(todo =>
    <div key={todo.id} onClick={() => markTodo(todo.id)}>
      {todo.title}
      {todo.completed ? ' - zadanie wykonane' : ' - zadanie niewykonane'}
    </div>
  );

  return (
    <div>
      <h2>Lista elementów:</h2>
      {todos.length ? renderTodos() : <div>Brak elementów TODO</div>}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: selectTodos(state),
  }
};

const mapDispatchToProps = dispatch => {
  return {
    markTodo: (value) => dispatch(markTodoComplete(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);