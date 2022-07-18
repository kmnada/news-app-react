import React from 'react';
import { shallow } from 'enzyme';
import RootLayout from '../rootLayout';

describe(' RootLayout component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<RootLayout />);
    expect(wrapper).toMatchSnapshot();
  });
});
