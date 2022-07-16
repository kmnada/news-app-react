import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../loader';

test('should render Loader component', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper).toMatchSnapshot();
});
