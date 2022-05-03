import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function DrinkInstruction() {
  const { drinkInProgress } = useContext(myContext);
  return (
    <div>
      <h3>Instructions</h3>
      <p data-testid="instructions">
        { drinkInProgress.strInstructions }
      </p>
    </div>
  );
}

export default DrinkInstruction;
