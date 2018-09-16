import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';
import InputField from './InputField/InputField';

configure({ adapter: new Adapter() });


const contact = {
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

describe('<Form />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form contact={contact} />);
  });

  it('should render 10 <InputField /> elements', () => {
    expect(wrapper.find(InputField)).toHaveLength(10);
  });
});
