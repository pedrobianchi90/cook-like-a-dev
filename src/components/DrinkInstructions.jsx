import React from 'react';

function DrinkInstruction() {
  return (
    <div>
      <h3>Instructions</h3>
      <p data-testid="instructions">
        {
          drinks[0].strInstructions
        }
      </p>
    </div>
  );
}

export default DrinkInstruction;
