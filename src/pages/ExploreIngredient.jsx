import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import RecipeContext from '../context/RecipeContext';

function ExploreIngredient() {
  const location = useLocation();
  const {
    mealIngredients,
    drinksIngredients,
  } = useContext(RecipeContext);
  console.log(mealIngredients);
  console.log(drinksIngredients);

  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
      </header>
      {location.pathname === '/explore/foods/ingredients'
        ? (
          <div>
            <h2 data-testid="page-title">Explore Foods Ingredients</h2>
            { mealIngredients.length > 0
              ? mealIngredients.map((ingredient, index) => (
                <div
                  key={ ingredient.idIngredient }
                  data-testid={ `${index}-ingredient-card` }
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
                </div>
              ))
              : '' }
          </div>
        )
        : (
          <div>
            <h2 data-testid="page-title">Explore Drinks Ingredients</h2>
            { drinksIngredients.length > 0
              ? drinksIngredients.map((ingredient, index) => (
                <div
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
                </div>
              ))
              : '' }
          </div>
        )}
      <Footer />
    </div>
  );
}

export default ExploreIngredient;
