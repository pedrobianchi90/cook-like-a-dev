import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function ExploreDinksIngredients() {
  const {
    drinksIngredients,
    setIngredientDrinkName,
    setDrinks,
  } = useContext(myContext);
  return (
    <div>
      { drinksIngredients.length > 0
        ? drinksIngredients.map((ingredient, index) => (
          <button
            type="button"
            value={ ingredient.strIngredient1 }
            onClick={ () => {
              setIngredientDrinkName(ingredient.strIngredient1); setDrinks([]);
            } }
            key={ ingredient.strIngredient1 }
            data-testid={ `${index}-ingredient-card` }
          >
            <img
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt={ ingredient.strIngredient1 }
              data-testid={ `${index}-card-img` }
            />
            <div>
              <span data-testid={ `${index}-card-name` }>
                { ingredient.strIngredient1 }
              </span>
            </div>
          </button>
        ))
        : '' }
    </div>
  );
}

export default ExploreDinksIngredients;
