import React from 'react';
import PropTypes from 'prop-types';
import { bindAll } from 'lodash';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: props.messages,
      sendMessage: props.sendMessage,
    }

    bindAll(this, [

    ]);
  }

  render() {
    return (
      <div>
        <p>This is ChaChaChat</p>
        <button onClick={this.state.sendMessage}>Send</button>
      </div>
    );
  }
}
Chat.propTypes = {
  messages: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

export default Chat;
