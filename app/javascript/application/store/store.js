import { createStore, applyMiddleware, compose} from 'redux'  
import rootReducer, { initialState } from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

let middleware = [thunk, createLogger()]

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;
