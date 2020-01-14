import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";

describe("App.tsx", () => {
  it("renders heading", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").exists()).toBe(true);
  });

  it("initially displays button", () => {
    const wrapper = mount(<App />);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });

  it("on button click, mounts Recipes component", () => {
    const wrapper = mount(<App />);
    wrapper.find("button").simulate("click");

    expect(wrapper.find("Recipes").exists()).toBe(true);
  });
});
