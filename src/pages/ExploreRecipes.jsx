import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import RecipeContext from '../context/RecipeContext';

function ExploreRecipes() {
  const location = useLocation();
  const {
    mealRandom,
    drinkRandom,
  } = useContext(RecipeContext);

  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
      </header>
      {location.pathname === '/explore/foods'
        ? (
          <>
            <h2 data-testid="page-title">Explore Foods</h2>
            <Link to="/explore/foods/ingredients">
              <button type="button" data-testid="explore-by-ingredient">
                By Ingredient
              </button>
            </Link>
            <Link to="/explore/foods/nationalities">
              <button type="button" data-testid="explore-by-nationality">
                By Nationality
              </button>
            </Link>
            <Link to={ `/foods/${mealRandom.length > 0 ? mealRandom[0].idMeal : ''}` }>
              <button
                type="button"
                data-testid="explore-surprise"
              >
                Surprise me!
              </button>
            </Link>
          </>)
        : (
          <>
            <h2 data-testid="page-title">Explore Drinks</h2>
            <Link to="/explore/drinks/ingredients">
              <button type="button" data-testid="explore-by-ingredient">
                By Ingredient
              </button>
            </Link>
            <Link
              to={ `/drinks/${drinkRandom.length > 0
                ? drinkRandom[0].idDrink : ''}` }
            >
              <button type="button" data-testid="explore-surprise">Surprise me!</button>
            </Link>
          </>)}
      <Footer />
    </div>
  );
}

export default ExploreRecipes;
