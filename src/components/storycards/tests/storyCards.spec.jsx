import React from 'react';
import { shallow } from 'enzyme';
import StoryCards from '../storyCards';

test('should render StoryCards component', () => {
  const wrapper = shallow(<StoryCards />);
  expect(wrapper).toMatchSnapshot();
});
