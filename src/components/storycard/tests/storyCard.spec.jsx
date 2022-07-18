import React from 'react';
import { shallow } from 'enzyme';
import StoryCard from '../storyCard';

describe(' StoryCard component', () => {
  it('renders default component', () => {
    const wrapper = shallow(<StoryCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
