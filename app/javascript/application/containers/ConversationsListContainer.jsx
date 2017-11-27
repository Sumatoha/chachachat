import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchConversations } from '../actions/conversationsActionCreators';
import ConversationsList from '../components/ConversationsList/ConversationsList';

function mapStateToProps(state) {
  return {
    conversations: state.conversations.conversations,
    isConversationsFetching: state.conversations.isConversationsFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchConversations: bindActionCreators(fetchConversations, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationsList);

