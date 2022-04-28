import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import RecipeContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function Drinks() {
  const [state, setState] = useState(false);
  const [filter, setfilter] = useState(false);

  const {
    drinks,
    drinksCategories,
    filterDrinkCategory,
    getFilterDrinkCategory,
  } = useContext(RecipeContext);

  const handleClick = async ({ target }) => {
    // if (filter) {
    //   setfilter(false);
    // } else {
    setfilter(true);
    // }
    await getFilterDrinkCategory(target.name);
  };

  return (
    <div>
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
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => setfilter(false) }
        >
          All
        </button>
        { drinksCategories
          ? drinksCategories.map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              name={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
            >
              {category.strCategory}
            </button>
          ))
          : <p>Loading...</p>}
      </div>
      <div>
        { filterDrinkCategory || drinks
          ? (filter ? filterDrinkCategory : drinks)
            .map((drink, index) => (
              <div
                key={ drink.idDrink }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                />
                <div>
                  <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
                </div>
              </div>
            ))
          : <p>Loading...</p>}

      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
