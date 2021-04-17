export const TODOS_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  MARK_TODO_COMPLETE: 'MARK_TODO_COMPLETE',
};

export const addTodo = (value, collection) => ({
  type: TODOS_ACTION_TYPES.ADD_TODO,
  payload: value,
  collection: collection,
});

export const markTodoComplete = (value) => ({
  type: TODOS_ACTION_TYPES.MARK_TODO_COMPLETE,
  payload: value,
});


export const fetchTodos = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => res.json())
      .then(json => dispatch(addTodo(json, true)));
  }
};

