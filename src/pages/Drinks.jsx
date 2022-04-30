import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import DrinksCategories from '../components/DrinksCategories';
import ListDrinks from '../components/ListDrinks';
import myContext from '../context/RecipeContext';

function Drinks() {
  const [state, setState] = useState(false);
  const { drinksData } = useContext(myContext);
  console.log(drinksData);

  return (
    <div>

      { drinksData.length === 1
          && <Redirect to={ `/drinks/${drinksData[0].idDrink}` } /> }
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Drinks</h2>
        <button type="button" onClick={ () => setState(!state) }>
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>
      { state && <SearchBar />}

      <DrinksCategories />
      { drinksData.length > 0
        ? (
          <div>
            {drinksData.map((recipe, index) => (
              <div
                key={ recipe.idDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/foods/${recipe.idDrink}` }>
                  <img
                    src={ recipe.strDrinkThumb }
                    alt="strDrinkThumb"
                    data-testid={ `${index}-card-img` }
                  />
                  <h2 data-testid={ `${index}-card-name` }>{recipe.strDrink}</h2>
                </Link>
              </div>
            ))}
          </div>) : ('')}

      <ListDrinks />

      <Footer />
    </div>
  );
}

export default Drinks;
