import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../loader';

describe(' Loader component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });
});
