import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function IngredientsDrink() {
  const { drinks } = useContext(myContext);
  const indexTest = 0;
  return (
    <div>
      <label htmlFor="ingredients" data-testid={ `${indexTest}-ingredient-step` }>
        <input name="ingredients" type="checkbox" />
        { drinks[0].strIngredient1 }

      </label>
    </div>
  );
}

export default IngredientsDrink;
