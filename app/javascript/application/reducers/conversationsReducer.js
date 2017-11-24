import constants from '../constants';

const {
  CREATE_CONVERSATION_SUCCESS,
} = constants;

export const initialState = {
  conversations: [],
 }

export default function conversationsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CONVERSATION_SUCCESS:
        return {
          ...state,
          conversations: [...state.conversations, action.payload],
        }

    default:
      return state
  }
}
