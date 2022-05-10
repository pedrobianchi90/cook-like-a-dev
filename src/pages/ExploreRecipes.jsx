import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHotMeal } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import RecipeContext from '../context/RecipeContext';
import '../style/HeaderStyle.css';
import '../style/ExploreStyle.css';

function ExploreRecipes() {
  const location = useLocation();
  const {
    mealRandom,
    drinkRandom,
  } = useContext(RecipeContext);

  return (
    <div>
      {location.pathname === '/explore/foods'
        ? (
          <>
            <header className="header-container">
              <Link to="/profile">
                <button type="button" className="icons-header">
                  <img
                    src={ profileIcon }
                    alt="logo-profile"
                    data-testid="profile-top-btn"
                  />
                </button>
              </Link>
              <h2 data-testid="page-title">Explore Foods</h2>
              <GiHotMeal className="icons-header" size="48px" />
            </header>
            <div className="bttn-container-explore">
              <Link to="/explore/foods/ingredients" className="link">
                <button
                  type="button"
                  data-testid="explore-by-ingredient"
                  className="bttn-explore"
                >
                  By Ingredient
                </button>
              </Link>
              <Link to="/explore/foods/nationalities" className="link">
                <button
                  type="button"
                  data-testid="explore-by-nationality"
                  className="bttn-explore"
                >
                  By Nationality
                </button>
              </Link>
              <Link
                to={ `/foods/${mealRandom.length > 0 ? mealRandom[0].idMeal : ''}` }
                className="link"
              >
                <button
                  type="button"
                  data-testid="explore-surprise"
                  className="bttn-explore"
                >
                  Surprise me!
                </button>
              </Link>
            </div>
          </>)
        : (
          <>
            <header className="header-container">
              <Link to="/profile">
                <button type="button" className="icons-header">
                  <img
                    src={ profileIcon }
                    alt="logo-profile"
                    data-testid="profile-top-btn"
                  />
                </button>
              </Link>
              <h2 data-testid="page-title">Explore Drinks</h2>
              <BiDrink className="icons-header" size="48px" />
            </header>
            <div className="bttn-container-explore-drinks">
              <Link to="/explore/drinks/ingredients" className="link">
                <button
                  type="button"
                  data-testid="explore-by-ingredient"
                  className="bttn-explore"
                >
                  By Ingredient
                </button>
              </Link>
              <Link
                to={ `/drinks/${drinkRandom.length > 0
                  ? drinkRandom[0].idDrink : ''}` }
                className="link"
              >
                <button
                  type="button"
                  data-testid="explore-surprise"
                  className="bttn-explore"
                >
                  Surprise me!
                </button>
              </Link>
            </div>
          </>)}
      <Footer />
    </div>
  );
}

export default ExploreRecipes;
