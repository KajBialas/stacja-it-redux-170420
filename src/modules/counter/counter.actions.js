export const COUNTER_ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHANGE: 'CHANGE',
};

export const incrementCounter = {
  type: COUNTER_ACTION_TYPES.INCREMENT
};

export const decrementCounter = {
  type: COUNTER_ACTION_TYPES.DECREMENT
};

export const resetCounter = {
  type: COUNTER_ACTION_TYPES.RESET
};

export const changeCounter = (value) => ({
  type: COUNTER_ACTION_TYPES.INCREMENT,
  payload: value,
});