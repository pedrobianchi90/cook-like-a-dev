import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import {
  fetchMealsIngredient,
  fetchMealsName,
  fetchMealsFirstLetter,
} from '../helper/fetchMeal';
import {
  fetchDrinksIngredients,
  fetchDrinksName,
  fetchDrinksFirstLetter,
} from '../helper/fetchDinks';

function SearchBar() {
  const {
    setDrinksData,
    setFoodsData,
    searchInputs,
    setSearchInputs,
  } = useContext(myContext);

  const [filterBtn, setFilterBtn] = useState('');
  const MAX = 12;
  const location = useLocation();

  const getFoods = async () => {
    let output = '';
    if (searchInputs.length > 1 && filterBtn === 'inputLetter') {
      global.alert('Your search must have only 1 (one) character');
    } if (filterBtn === 'inputIngredients') {
      output = await fetchMealsIngredient(searchInputs);
    } if (filterBtn === 'inputName') {
      output = await fetchMealsName(searchInputs);
    } if (filterBtn === 'inputLetter') {
      output = await fetchMealsFirstLetter(searchInputs);
    } if (output !== null && filterBtn !== '') {
      console.log(output);
      return setFoodsData(output.slice(0, MAX));
    } global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  const getDrinks = async () => {
    let output = '';
    if (searchInputs.length > 1 && filterBtn === 'inputLetter') {
      global.alert('Your search must have only 1 (one) character');
    } if (filterBtn === 'inputIngredients') {
      output = await fetchDrinksIngredients(searchInputs);
    } if (filterBtn === 'inputName') {
      output = await fetchDrinksName(searchInputs);
    } if (filterBtn === 'inputLetter') {
      output = await fetchDrinksFirstLetter(searchInputs);
    } if (output !== null && filterBtn !== '') {
      return setDrinksData(output.slice(0, MAX));
    } global.alert('Sorry, we haven\'t found any recipes for these filters.');
  };

  const handleClick = () => {
    if (location.pathname === '/foods') {
      getFoods();
    } if (location.pathname === '/drinks') {
      getDrinks();
    }
  };

  return (
    <section>

      <div>
        <label htmlFor="searchInput">
          Search Recipe:
          <input
            type="text"
            id="searchInput"
            placeholder="Search"
            data-testid="search-input"
            value={ searchInputs }
            onChange={ ({ target }) => {
              setSearchInputs(target.value);
            } }
          />
        </label>

        <label htmlFor="ingredients">
          Ingredients
          <input
            type="radio"
            id="ingredients-search"
            data-testid="ingredient-search-radio"
            name="filter"
            value="inputIngredients"
            onChange={ () => { setFilterBtn('inputIngredients'); } }
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="radio"
            name="filter"
            id="name-search"
            value="inputName"
            data-testid="name-search-radio"
            onChange={ () => { setFilterBtn('inputName'); } }
          />
        </label>

        <label htmlFor="letter">
          First Letter
          <input
            type="radio"
            name="filter"
            value="inputLetter"
            data-testid="first-letter-search-radio"
            id="letter-search"
            onChange={ () => { setFilterBtn('inputLetter'); } }
          />
        </label>
      </div>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>

    </section>
  );
}

export default SearchBar;
