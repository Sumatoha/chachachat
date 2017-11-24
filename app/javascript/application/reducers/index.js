import { combineReducers } from 'redux';
import messagesReducer, { initialState as messagesState } from './messagesReducer';
import conversationsReducer, { initialState as conversationsState } from './conversationsReducer';

export const initialState = {
  messages: messagesState,
  conversations: conversationsState,
}

export default combineReducers({
  messages: messagesReducer,
  conversations: conversationsReducer,
});
