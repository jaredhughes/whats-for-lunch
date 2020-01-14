import React, { useState } from 'react';
import './App.css';
import { Recipes } from './components/Recipes'

const App: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
    <div className="container">
      <h1>What's for Lunch?</h1>

      {!isVisible ? (
        <button className="cta-button" onClick={() => setVisible(true)}>Click Here to Find Out</button>
      ) : (
          <Recipes />
        )}
    </div>
  );
}

export default App;
