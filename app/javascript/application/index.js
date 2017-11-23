import React from 'react';
import { render } from 'react-dom';
import Chat from './components/Chat/Chat';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  render(<Chat/>, container);
});
