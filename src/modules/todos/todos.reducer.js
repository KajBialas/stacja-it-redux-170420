import { TODOS_ACTION_TYPES } from './todos.actions';

const todosInitialState = {
  list: [],
};

const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.ADD_TODO:
      const newTodoElementId = state.list.length ? state.list.length : 0;
      return {
        ...state,
        list: [...state.list, {
          id: newTodoElementId,
          title: action.payload,
          completed: false,
        }]
      };
    case TODOS_ACTION_TYPES.MARK_TODO_COMPLETE:
      const newTodosArray = [...state.list];
      newTodosArray[action.payload].completed = !newTodosArray[action.payload].completed;

      return state = {
        ...state,
        list: newTodosArray,
      }
    default:
      return state;
  }
}

export default todosReducer;