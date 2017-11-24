import React from 'react';
import { render } from 'react-dom';
import ChatContainer from './containers/ChatContainer';
import store from './store/store';
import { Provider } from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
        <ChatContainer/>
    </Provider>,
    document.getElementById('root')
  )
});
