import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from '../helpers/privateRoute';

describe(' PrivateRoute component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
