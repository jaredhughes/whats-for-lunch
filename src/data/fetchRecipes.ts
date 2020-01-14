import { fetch } from './fetch'

export interface Recipe {
  title: string
  ingredients: string[]
}

interface Recipes {
  recipes: Recipe[]
}

const ENDPOINT = process.env.REACT_APP_RECIPES_ENDPOINT as string

export const fetchRecipes = (): Promise<Recipe[]> =>
  fetch<Recipes>(ENDPOINT).then(response => response.data.recipes)
