import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function ExploreRecipes() {
  const location = useLocation();

  const getIdFood = () => async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    const response = await fetch(url);
    const data = await response.json();
    const { idMeal } = data.meals[0];
    console.log(idMeal);
    /* return <Link data-testid="product-detail-link" to={ `/explore/foods/${idMeal}` } />; */
  };
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
            <button
              type="button"
              data-testid="explore-surprise"
              onClick={ getIdFood() }
            >
              Surprise me!
            </button>
          </>)
        : (
          <>
            <h2 data-testid="page-title">Explore Drinks</h2>
            <Link to="/explore/drinks/ingredients">
              <button type="button" data-testid="explore-by-ingredient">
                By Ingredient
              </button>
            </Link>
            <button type="button" data-testid="explore-surprise">Surprise me!</button>
          </>)}
      <Footer />
    </div>
  );
}

export default ExploreRecipes;
