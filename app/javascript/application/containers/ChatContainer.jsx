import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessageSuccess } from '../actions/messagesActionCreators';
import { createConversation } from '../actions/conversationsActionCreators';
import Chat from '../components/Chat/Chat';

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
    conversations: state.conversations.conversations,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: bindActionCreators(sendMessageSuccess, dispatch),
    createConversation: bindActionCreators(createConversation, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
