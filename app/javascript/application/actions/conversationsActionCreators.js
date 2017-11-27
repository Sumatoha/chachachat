import request from 'axios';
import actionTypes from '../constants';

let token = document.getElementsByName('csrf-token')[0].getAttribute('content');
request.defaults.headers.common['X-CSRF-Token'] = token;
request.defaults.headers.common['Accept'] = 'application/json';

const checkHttpStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

const createConversationSuccess = (response) => ({
  type: actionTypes.CREATE_CONVERSATION_SUCCESS,
  conversation: response.conversation,
});

export const createConversation = params => dispatch => 
  request.post('/api/conversations', { conversation: params })
    .then(checkHttpStatus)
    .then((response) => response.data)
    .then((response) => dispatch(createConversationSuccess(response)));

    const fetchConversationsRequest = isConversationsFetching => ({
      type: actionTypes.FETCH_CONVERSATIONS_REQUEST,
      payload: isConversationsFetching,
    });
    
    const fetchConversationsSuccess = (payload) => (dispatch) => {
      dispatch(fetchConversationsRequest(false));
    
      dispatch({
        type: actionTypes.FETCH_CONVERSATIONS_SUCCESS,
        conversations: payload.conversations,
      });
    };


export const fetchConversations = () => dispatch => {
  dispatch(fetchConversationsRequest(true));
  console.log('fetchConversations');
  request.get('/api/conversations')
    .then(checkHttpStatus)
    .then((response) => response.data)
    .then((response) => dispatch(fetchConversationsSuccess(response)));
}
