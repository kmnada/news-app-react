import React from 'react';
import { shallow } from 'enzyme';
import StoryCards from '../storyCards';

describe(' StoryCards component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<StoryCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
