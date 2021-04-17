export const selectActiveTodos = (todos) =>
  todos.filter(todo => !todo.completed);