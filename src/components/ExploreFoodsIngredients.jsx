import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function ExploreFoodsIngredients() {
  const {
    mealIngredients,
    setIngredientMealName,
    setMeals,
  } = useContext(myContext);

  return (
    <div>
      <h2 data-testid="page-title">Explore Foods Ingredients</h2>
      { mealIngredients.length > 0
        ? mealIngredients.map((ingredient, index) => (
          <button
            type="button"
            value={ ingredient.strIngredient }
            key={ ingredient.idIngredient }
            data-testid={ `${index}-ingredient-card` }
            onClick={ () => {
              setIngredientMealName(ingredient.strIngredient);
              setMeals([]);
            } }
          >
            <img
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              alt={ ingredient.strIngredient }
              data-testid={ `${index}-card-img` }
            />
            <div>
              <span data-testid={ `${index}-card-name` }>
                { ingredient.strIngredient }
              </span>
            </div>
          </button>
        ))
        : '' }
    </div>);
}

export default ExploreFoodsIngredients;
