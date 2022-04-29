import React, { useContext, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import myContext from '../context/RecipeContext';
import FoodsCategories from '../components/FoodsCategories';
import ListFoods from '../components/ListFoods';

function Foods() {
  const [state, setState] = useState(false);
  const { foodsData } = useContext(myContext);
  console.log(foodsData);

  if (foodsData.length === 1) {
    return <Redirect to={ `/foods/${foodsData[0].idMeal}` } />;
  }

  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Foods</h2>
        <button type="button" onClick={ () => setState(!state) }>
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>

      { state && <SearchBar />}

      <FoodsCategories />

      { foodsData.length > 0
        ? (
          <div>
            {foodsData.map((recipe, index) => (
              <div
                key={ recipe.idMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <Link to={ `/foods/${recipe.idMeal}` }>
                  <img
                    src={ recipe.strMealThumb }
                    alt="strMealThumb"
                    data-testid={ `${index}-card-img` }
                  />
                  <h2 data-testid={ `${index}-card-name` }>{recipe.strMeal}</h2>
                </Link>
              </div>
            ))}
          </div>) : ('')}
      <ListFoods />

      <Footer />
    </div>
  );
}

export default Foods;
