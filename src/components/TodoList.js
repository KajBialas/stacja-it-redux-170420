import React, { useEffect } from 'react';
import { markTodoComplete, fetchTodos } from '../modules/todos/todos.actions';
import { selectTodos } from '../modules/todos/todos.selector';
import { useSelector, useDispatch } from 'react-redux';

function TodosList() {
  const todos = useSelector(state => selectTodos(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleMarkTodo = (value) => dispatch(markTodoComplete(value));

  const renderTodos = () => todos.map(todo =>
    <div key={todo.id} onClick={() => handleMarkTodo(todo.id)}>
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


export default TodosList;