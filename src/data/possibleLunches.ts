import { fetchIngredients, Ingredient } from './fetchIngredients'
import { fetchRecipes, Recipe } from './fetchRecipes'
import { isBefore, isAfter } from './../utils'

export interface PossibleLunches {
  safe: Recipe[]
  questionable: Recipe[]
}

export type LunchRecipe = Recipe & {
  ingredients: Ingredient[]
}

const isSafe = (ingredient: Ingredient | undefined) =>
  ingredient && isBefore(ingredient['best-before'])

const isQuestionable = (ingredient: Ingredient | undefined) =>
  ingredient &&
  isBefore(ingredient['use-by']) &&
  isAfter(ingredient['best-before'])

const ingredientByTitle = (ingredients: Ingredient[], title: string) =>
  ingredients.find(i => title === i.title)

const getBestByRecipes = (recipes: Recipe[], ingredients: Ingredient[]) =>
  recipes.filter(recipe =>
    recipe.ingredients.every(title =>
      isSafe(ingredientByTitle(ingredients, title))
    )
  )

const getQuestionableRecipes = (recipes: Recipe[], ingredients: Ingredient[]) =>
  recipes.filter(recipe =>
    recipe.ingredients
      .map(title => isQuestionable(ingredientByTitle(ingredients, title)))
      .includes(true)
  )

export async function possibleLunches(): Promise<PossibleLunches> {
  const ingredients = await fetchIngredients()
  const recipes = await fetchRecipes()

  return {
    safe: getBestByRecipes(recipes, ingredients),
    questionable: getQuestionableRecipes(recipes, ingredients)
  }
}
