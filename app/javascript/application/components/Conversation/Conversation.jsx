import React from 'react';
import PropTypes from 'prop-types';


class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      users: props.users,
    }
  }

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.users.map((user, index) => (
          <div>
            {user.name}
          </div>
        ))}
      </div>
    )
  };
}

Conversation.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
}

Conversation.defaultProps = {
  name: 'untitled',
  users: [],
}

export default Conversation;
