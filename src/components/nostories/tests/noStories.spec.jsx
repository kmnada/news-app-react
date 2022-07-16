import React from "react";
import { shallow } from "enzyme";
import NoStories from "../noStories";

test("should render NoStories component", () => {
  const wrapper = shallow(
      <NoStories />
  );
  expect(wrapper).toMatchSnapshot();
});
