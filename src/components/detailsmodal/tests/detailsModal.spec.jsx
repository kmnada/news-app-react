import React from "react";
import { shallow } from "enzyme";
import DetailsModal from "../detailsModal";

test("should render detailsModal component", () => {
  const wrapper = shallow(
      <DetailsModal />
  );
  expect(wrapper).toMatchSnapshot();
});
