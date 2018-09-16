import React from 'react';
import ReactDOM from 'react-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Preview from './Preview';
import Avatar from './Avatar/Avatar';

configure({ adapter: new Adapter() });


let contact = {
  givenName: '',
  surname: '',
  email: '',
  phone: '',
  number: '',
  street: '',
  suburb: '',
  state: '',
  postCode: '',
  country: '',
};

describe('<Preview />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Preview contact={contact} />);
  });

  it('should render <Avatar /> element', () => {
    expect(wrapper.find(Avatar)).toHaveLength(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});