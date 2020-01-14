import React from 'react'
import { Recipe } from '../data/fetchRecipes'
import { IngredientsList } from './IngredientsList'

export interface Props {
  list: Recipe[]
}

export const RecipesList: React.FC<Props> = ({ list }) => {
  if (!list || !list.length) {
    return <p>No recipes found.</p>
  } else {
    return (
      <>
        {list.map(r => (
          <div className="recipe">
            <h3>{r.title}</h3>
            <IngredientsList ingredients={r.ingredients} />
          </div>
        )
        )}
      </>
    )
  }
}
