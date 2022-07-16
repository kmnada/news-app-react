import React from "react";
import { shallow } from "enzyme";
import StoryCard from "../storyCard";

test("should render StoryCard component", () => {
  const wrapper = shallow(
      <StoryCard />
  );
  expect(wrapper).toMatchSnapshot();
});
