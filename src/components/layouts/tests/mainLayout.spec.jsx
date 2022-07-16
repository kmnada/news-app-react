import React from "react";
import { shallow } from "enzyme";
import MainLayout from "../mainlayout";

test("should render MainLayout component", () => {
  const wrapper = shallow(
      <MainLayout />
  );
  expect(wrapper).toMatchSnapshot();
});
