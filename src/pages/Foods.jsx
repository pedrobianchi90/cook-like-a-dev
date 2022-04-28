import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
import RecipeContext from '../context/RecipeContext';
// import myContext from '../context/RecipeContext';

function Foods() {
  const [state, setState] = useState(false);
  // const { foodsData } = useContext(myContext);
  const LOADING = 'Carregando...';

  const [filter, setfilter] = useState(false);

  const {
    meals,
    getMeals,
    mealCategories,
    getMealCategories,
    filterMealCategory,
    getFilterMealCategory,
  } = useContext(RecipeContext);

  useEffect(() => {
    getMeals();
    getMealCategories();
  }, []);

  const handleClick = async ({ target }) => {
    // if (filter) {
    //   setfilter(false);
    // } else {
    //   setfilter(true);
    // }
    setfilter(true);
    await getFilterMealCategory(target.name);
  };

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
      <div />
      { state && <SearchBar />}
      {/* && <input data-testid="search-input" type="text" placeholder="Search Recipe" /> */}
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => setfilter(false) }
        >
          All
        </button>
        { mealCategories
          ? mealCategories.map((category) => (
            <button
              key={ category.strCategory }
              name={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
            >
              {category.strCategory}
            </button>
          ))
          : LOADING}
      </div>
      <div>
        { filterMealCategory || meals
          ? (filter ? filterMealCategory : meals)
            .map((meal, index) => (
              <div
                key={ meal.idMeal }
                data-testid={ `${index}-recipe-card` }
              >
                <img
                  src={ meal.strMealThumb }
                  alt={ meal.strMeal }
                  data-testid={ `${index}-card-img` }
                />
                <div>
                  <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
                </div>
              </div>
            ))
          : LOADING }
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
