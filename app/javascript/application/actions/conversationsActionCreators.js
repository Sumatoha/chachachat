import request from 'axios';
import actionTypes from '../constants';

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
request.defaults.headers.common['X-CSRF-Token'] = token
request.defaults.headers.common['Accept'] = 'application/json'

const createConversationSuccess = (response) => ({
  type: actionTypes.CREATE_CONVERSATION_SUCCESS,
  payload: response,
});

// export const createConversation = params => dispatch =>
// dispatch(ConversationService.createConversation(params))
//   .then(response => dispatch(createConversationSuccess(response)))
//   params => dispatch =>
//   dispatch(APIService.patch(`/api/conversations/${params.id}`, params)),

const checkHttpStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

  export const createConversation = params => dispatch => 
    request.post('/api/conversations', { conversation: params })
    .then(checkHttpStatus)
    .then((response) => response.data)
      .then((response) => dispatch(createConversationSuccess(response)));
  
    