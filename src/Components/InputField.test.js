import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InputField />, div);
  ReactDOM.unmountComponentAtNode(div);
});
