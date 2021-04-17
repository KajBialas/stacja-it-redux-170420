import React from 'react';
import { connect } from 'react-redux';

function TodosList({todos}) {

  const renderTodos = () => todos.map(todo => <div>{todo}</div>);

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

export default connect(mapStateToProps, null)(TodosList);