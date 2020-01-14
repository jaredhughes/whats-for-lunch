import React from 'react'
import { PossibleLunches } from '../data/possibleLunches'
import { RecipesList } from './RecipesList'

interface Props {
  recipes: PossibleLunches | null
}

export const Recipes: React.FC<Props> = ({ recipes }) => {
  if (!recipes) {
    return <p>Loading...</p>
  } else {
    return (
      <>
        <h2>Safe</h2>
        <RecipesList list={recipes.safe} />

        <hr />

        <h2>Questionable</h2>
        <RecipesList list={recipes.questionable} />
      </>
    )
  }
}
