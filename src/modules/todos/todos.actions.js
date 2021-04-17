export const TODOS_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  MARK_TODO_COMPLETE: 'MARK_TODO_COMPLETE',
};

export const addTodo = (value) => ({
  type: TODOS_ACTION_TYPES.ADD_TODO,
  payload: value,
});

export const markTodoComplete = (value) => ({
  type: TODOS_ACTION_TYPES.MARK_TODO_COMPLETE,
  payload: value,
});