import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function IngredientsDrink() {
  const { drinks } = useContext(myContext);
  return (
    <div>
      { drinks[0].strIngredient1 }
    </div>
  );
}

export default IngredientsDrink;
