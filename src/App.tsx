import React, { useEffect, useState } from 'react';
import './App.css';
import { possibleLunches, PossibleLunches } from './data/possibleLunches'
import { Recipes } from './components/Recipes'

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<PossibleLunches | null>(null)
  const [isVisible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    possibleLunches()
      .then(result => {
        setRecipes(result)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className="container">
      <h1>What's for Lunch?</h1>

      {!isVisible ? (
        <button onClick={() => setVisible(true)}>Click Here to Find Out</button>
      ) : (
          <Recipes recipes={recipes} />
        )}
    </div>
  );
}

export default App;
