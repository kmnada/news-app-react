import React from "react";
import { shallow } from "enzyme";
import Home from "../home";

test("should render Home component", () => {
  const wrapper = shallow(
      <Home />
  );
  expect(wrapper).toMatchSnapshot();
});
