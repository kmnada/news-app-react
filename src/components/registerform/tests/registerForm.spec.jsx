import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from '../registerForm';

describe(' RegisterForm component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<RegisterForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
