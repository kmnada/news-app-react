import React from 'react';
import { shallow } from 'enzyme';
import RegisterForm from '../registerForm';

test('should render RegisterForm component', () => {
  const wrapper = shallow(<RegisterForm />);
  expect(wrapper).toMatchSnapshot();
});
