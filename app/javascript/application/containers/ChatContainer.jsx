import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessageSuccess } from '../actions/messagesActionCreator';
import Chat from '../components/Chat/Chat';

function mapStateToProps(state) {
  return {
    messages: state.messages.messages,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: bindActionCreators(sendMessageSuccess, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
