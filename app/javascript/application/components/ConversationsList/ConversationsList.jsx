import React from 'react';
import PropTypes from 'prop-types';
// import { Col, Card } from 'elemental';
import { bindAll } from 'lodash';
import Conversation from '../Conversation/Conversation';


class ConversationsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: props.conversations,
      isConversationsFetching: props.isConversationsFetching,
    }

    bindAll(this, []);
  }

  componentWillMount() {
    if (!this.props.isConversationsFetching) {
      this.props.fetchConversations();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ ...newProps });
  }

  render() {
    if (this.state.isConversationsFetching) {
      return null;
    }
    return (

          <ul className="list-group">
            {this.state.conversations.map((conversation, index) => (
              <li className="list-group-item" key={index}>
                <Conversation {...conversation} />
              </li>
            ))}
          </ul>
    )
  }
}

ConversationsList.propTypes = {
  conversations: PropTypes.array,
  fetchConversations: PropTypes.func.isRequired,
  isConversationsFetching: PropTypes.bool.isRequired,
}

ConversationsList.defaultProps = {
  conversations: [],
}


export default ConversationsList;
