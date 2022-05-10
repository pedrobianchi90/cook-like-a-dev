import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import myContext from '../context/RecipeContext';
import FoodsCategories from '../components/FoodsCategories';
import ListFoods from '../components/ListFoods';
import '../style/HeaderStyle.css';
import '../style/List.css';

function Foods() {
  const [state, setState] = useState(false);
  const { foodsData } = useContext(myContext);

  if (foodsData.length === 1) {
    return <Redirect to={ `/foods/${foodsData[0].idMeal}` } />;
  }

  return (
    <div className="recipes-container">
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Foods</h2>
        <button type="button" onClick={ () => setState(!state) } className="icons-header">
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>

      { state && <SearchBar />}

      <FoodsCategories />

      { foodsData.length > 0
        ? (
          <div className="list-container">
            {foodsData.map((recipe, index) => (
              <div
                key={ recipe.idMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/foods/${recipe.idMeal}` }>
                  <div className="card-container">
                    <img
                      src={ recipe.strMealThumb }
                      alt="strMealThumb"
                      data-testid={ `${index}-card-img` }
                      className="list-picture"
                    />
                    <h2
                      data-testid={ `${index}-card-name` }
                      className="list-name-filter"
                    >
                      {recipe.strMeal}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>) : ('')}
      <ListFoods />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Foods;
