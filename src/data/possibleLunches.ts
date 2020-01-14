import { fetchIngredients, Ingredient } from './fetchIngredients'
import { fetchRecipes, Recipe } from './fetchRecipes'
import { isBefore, isAfter } from './../utils'

export interface PossibleLunches {
  safe: Recipe[]
  questionable: Recipe[]
}

const filterSafe = (ingredients: Ingredient[]) =>
  ingredients.filter(i => isBefore(i['use-by']))

const filterQuestionable = (ingredients: Ingredient[]) =>
  ingredients.filter(i => isAfter(i['use-by']) && isBefore(i['best-before']))

const recipesForIngredients = (recipes: Recipe[], ingredients: Ingredient[]): Recipe[] => {
  const ingredientTitles = ingredients.map(i => i.title)

  return recipes.filter(r => {
    const matchIngredients = r.ingredients.map(i => ingredientTitles.includes(i))
    return matchIngredients.length > 0
  })
}

export async function possibleLunches(): Promise<PossibleLunches> {
  const ingredients = await fetchIngredients()
  const safeIngredients = filterSafe(ingredients)
  const questionableIngredients = filterQuestionable(ingredients)
  const recipes = await fetchRecipes()

  return {
    safe: recipesForIngredients(recipes, safeIngredients),
    questionable: recipesForIngredients(recipes, questionableIngredients)
  }
}
