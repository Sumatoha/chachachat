import constants from '../constants';

const {
  CREATE_CONVERSATION_SUCCESS,
  FETCH_CONVERSATIONS_REQUEST,
  FETCH_CONVERSATIONS_SUCCESS,
} = constants;

export const initialState = {
  conversations: [],
  isConversationsFetching: false,
 }

export default function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CONVERSATION_SUCCESS:
        return {
          ...state,
          conversations: [...state.conversations, action.conversation],
        }

    case FETCH_CONVERSATIONS_REQUEST:
        return {
          ...state,
          isConversationsFetching: action.payload,
        }
        
    case FETCH_CONVERSATIONS_SUCCESS:
        return {
          ...state,
          conversations: [...state.conversations, ...action.conversations],
        }

    default:
      return state
  }
}
