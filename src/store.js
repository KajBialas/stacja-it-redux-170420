import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/root.reducer';
import thunk from 'redux-thunk';

export const configureStore = () =>
  createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );