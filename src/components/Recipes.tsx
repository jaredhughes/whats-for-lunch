import React, { useEffect, useState } from 'react'
import { possibleLunches, PossibleLunches } from './../data/possibleLunches'
import { RecipesList } from './RecipesList'

export const Recipes: React.FC<{}> = () => {
  const [recipes, setRecipes] = useState<PossibleLunches | null>(null)

  useEffect(() => {
    possibleLunches()
      .then(result => {
        setRecipes(result)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (!recipes) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="content">
        <div className="safeGroup">
          <h2>Safe</h2>
          <RecipesList list={recipes.safe} />
        </div>

        <div className="questionableGroup">
          <h2>Questionable</h2>
          <RecipesList list={recipes.questionable} />
        </div>
      </div>
    )
  }
}
