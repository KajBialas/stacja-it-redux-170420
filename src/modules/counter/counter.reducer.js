import { COUNTER_ACTION_TYPES } from './counter.actions';

const counterInitialState = {
  value: 0,
};

const counterReducer = (state = counterInitialState, action) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      }
    case COUNTER_ACTION_TYPES.DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      }
    case COUNTER_ACTION_TYPES.RESET:
      return {
        ...state,
        value: counterInitialState.value,
      }
    case COUNTER_ACTION_TYPES.CHANGE:
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state;
  }
}

export default counterReducer;