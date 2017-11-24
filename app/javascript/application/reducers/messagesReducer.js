import constants from '../constants';

const {
  SEND_MESSAGE_SUCCESS,
  FETCH_MESSAGES_SUCCESS,
} = constants;

export const initialState = {
  messages: [],
 }

export default function messagesReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE_SUCCESS:
      console.log('Sended');
      return state;

    case FETCH_MESSAGES_SUCCESS:
        return {
          ...state,
          messages: action.payload.messages,
        }

    default:
      return state
  }
}
