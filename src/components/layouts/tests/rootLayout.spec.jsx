import React from "react";
import { shallow } from "enzyme";
import RootLayout from "../rootLayout";

test("should render RootLayout component", () => {
  const wrapper = shallow(
      <RootLayout />
  );
  expect(wrapper).toMatchSnapshot();
});
