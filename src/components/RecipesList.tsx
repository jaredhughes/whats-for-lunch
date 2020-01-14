import React from 'react'
import { Recipe } from '../data/fetchRecipes'
import { IngredientsList } from './IngredientsList'

export interface Props {
  list: Recipe[]
}

export const RecipesList: React.FC<Props> = ({ list }) => {
  if (!list || !list.length) {
    return (
      <div className="noResults">
        <p style={{ textAlign: 'center' }}>No recipes found.</p>
      </div>
    )
  } else {
    return (
      <>
        {list.map((r, k) => (
          <div className="recipe" key={k}>
            <h3>{r.title}</h3>
            <IngredientsList ingredients={r.ingredients} />
          </div>
        )
        )}
      </>
    )
  }
}
