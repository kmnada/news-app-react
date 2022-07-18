import React from 'react';
import { shallow } from 'enzyme';
import NoStories from '../noStories';

describe(' NoStories component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<NoStories />);
    expect(wrapper).toMatchSnapshot();
  });
});
