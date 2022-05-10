import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';
import '../style/List.css';

function ExploreDinksIngredients() {
  const {
    drinksIngredients,
    setIngredientDrinkName,
    setDrinks,
  } = useContext(myContext);
  return (
    <div className="list-container">
      { drinksIngredients.length > 0
        ? drinksIngredients.map((ingredient, index) => (
          <div key={ index } className="card-container">
            <button
              className="card-container-ingredient"
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
                className="list-picture"
              />
              <div>
                <span
                  data-testid={ `${index}-card-name` }
                  className="list-name-ingredient"
                >
                  { ingredient.strIngredient1 }
                </span>
              </div>
            </button>
          </div>
        ))
        : '' }
    </div>
  );
}

export default ExploreDinksIngredients;
