import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App.tsx", () => {
  it("renders heading", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1")).toBe(true);
  });
});
