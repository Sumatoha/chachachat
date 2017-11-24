import { combineReducers } from 'redux';
import messagesReducer, { initialState as messagesState } from './messagesReducer';

export const initialState = {
  messages: messagesState,
}

export default combineReducers({
  messages: messagesReducer,
});
