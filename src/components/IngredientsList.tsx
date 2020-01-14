import React from 'react'

interface Props {
  ingredients: string[]
}

export const IngredientsList: React.FC<Props> = ({ ingredients }) =>
  <div className="ingredients">
    <h4>Ingredients</h4>
    {ingredients.map(i => <li>{i}</li>)}
  </div>
