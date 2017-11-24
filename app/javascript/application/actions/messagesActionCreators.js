import actionTypes from '../constants';

export const sendMessageSuccess = () => ({
    type: actionTypes.SEND_MESSAGE_SUCCESS,
});

export const fetchMessagesSuccess = (messages) => ({
    type: actionTypes.FETCH_MESSAGES_SUCCESS,
    payload: { messages },
});
