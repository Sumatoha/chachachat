import { createStore, applyMiddleware } from 'redux'  
import rootReducer, { initialState } from '../reducers';
import { createLogger } from 'redux-logger'

let middleware = [createLogger()]

const store = createStore(rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;




