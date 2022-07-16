import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from '../helpers/privateRoute';

test('should render PrivateRoute component', () => {
  const wrapper = shallow(<PrivateRoute />);
  expect(wrapper).toMatchSnapshot();
});
