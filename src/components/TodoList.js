import React from 'react';
import { connect } from 'react-redux';
import { ACTION_TYPES } from '../index';

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
    todos: state.todos
  }
};

const mapDispatchToProps = dispatch => {
  return {
    markTodo: (value) => dispatch({
      type: ACTION_TYPES.MARK_TODO_COMPLETE,
      payload: value,
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);