import { fetch } from './fetch'

interface Ingredient {
  title: string
  'best-before': string
  'use-by': string
}

interface Ingredients {
  ingredients: Ingredient[]
}

const ENDPOINT = process.env.REACT_APP_INGREDIENTS_ENDPOINT as string

export const fetchIngredients = (): Promise<Ingredient[]> =>
  fetch<Ingredients>(ENDPOINT)
    .then(response => response.data.ingredients)
