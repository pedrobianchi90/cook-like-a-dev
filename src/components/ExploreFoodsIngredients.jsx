import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';
import '../style/List.css';

function ExploreFoodsIngredients() {
  const {
    mealIngredients,
    setIngredientMealName,
    setMeals,
  } = useContext(myContext);

  return (
    <div className="list-container">
      { mealIngredients.length > 0
        ? mealIngredients.map((ingredient, index) => (
          <div key={ ingredient.idIngredient } className="card-container">
            <button
              className="card-container-ingredient"
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
                className="list-picture"
              />
              <div>
                <span
                  data-testid={ `${index}-card-name` }
                  className="list-name-ingredient"
                >
                  { ingredient.strIngredient }
                </span>
              </div>
            </button>
          </div>
        ))
        : '' }
    </div>);
}

export default ExploreFoodsIngredients;
