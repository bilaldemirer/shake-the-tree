import Protein from "./Protein";
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";

describe("Protein", () => {
  test("should match snapshot", () => {
    const wrapper = shallow(<Protein />);
    expect(wrapper.find(<Provider />));
    expect(wrapper).toMatchSnapshot();
  });
});
