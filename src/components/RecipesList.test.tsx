import React from "react";
import { mount } from "enzyme";
import { RecipesList } from "./RecipesList";

const data = [
  {
    title: "Recipe A",
    ingredients: ["a", "b"]
  },
  {
    title: "Recipe B",
    ingredients: ["a", "b"]
  }
];

describe("RecipesList.tsx", () => {
  it("handles empty list", () => {
    const wrapper = mount(<RecipesList list={[]} />);
    const noResults = wrapper.find(".noResults");
    expect(noResults.text()).toBe("No recipes found.");
  });

  it("renders all recipes", () => {
    const wrapper = mount(<RecipesList list={data} />);
    const recipes = wrapper.find(".recipe h3").length;
    expect(recipes).toBe(2);
  });

  it("renders IngredientsList", () => {
    const wrapper = mount(<RecipesList list={data} />);
    const ingredientsList = wrapper.find("IngredientsList");

    expect(ingredientsList.exists()).toBe(true);
  });
});
