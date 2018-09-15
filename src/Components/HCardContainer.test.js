import React from 'react';
import ReactDOM from 'react-dom';
import HCardContainer from './HCardContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HCardContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
