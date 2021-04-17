export const selectTodos = state =>
  state.todos.list;

export const selectActiveTodos = state =>
  state.todos.list.filter(todo => !todo.completed);

