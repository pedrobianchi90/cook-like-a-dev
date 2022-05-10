import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import DrinksCategories from '../components/DrinksCategories';
import ListDrinks from '../components/ListDrinks';
import myContext from '../context/RecipeContext';
import '../style/HeaderStyle.css';
import '../style/List.css';

function Drinks() {
  const [state, setState] = useState(false);
  const { drinksData } = useContext(myContext);

  return (
    <div>

      { drinksData.length === 1
          && <Redirect to={ `/drinks/${drinksData[0].idDrink}` } /> }
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Drinks</h2>
        <button type="button" onClick={ () => setState(!state) } className="icons-header">
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>
      { state && <SearchBar />}

      <DrinksCategories />
      { drinksData.length > 0
        ? (
          <div className="list-container">
            {drinksData.map((recipe, index) => (
              <div
                key={ recipe.idDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/foods/${recipe.idDrink}` }>
                  <div className="card-container">
                    <img
                      src={ recipe.strDrinkThumb }
                      alt="strDrinkThumb"
                      data-testid={ `${index}-card-img` }
                      className="list-picture"
                    />
                    <h2
                      data-testid={ `${index}-card-name` }
                      className="list-name-filter"
                    >
                      {recipe.strDrink}
                    </h2>
                  </div>
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
