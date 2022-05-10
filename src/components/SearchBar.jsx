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
import '../style/SearchStyle.css';

function SearchBar() {
  const {
    setDrinksData,
    setFoodsData,
    searchInputs,
    setSearchInputs,
    setDrinks,
    setMeals,
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
      // console.log(output);
      setMeals([]);
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
      setDrinks([]);
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
      <div className="search-container">
        <div className="input-bttn">
          <label htmlFor="searchInput">
            <input
              className="input-search"
              type="text"
              id="searchInput"
              placeholder="Find your recipe here!"
              data-testid="search-input"
              value={ searchInputs }
              onChange={ ({ target }) => {
                setSearchInputs(target.value);
              } }
            />
          </label>
          <button
            className="bttn-search"
            type="button"
            data-testid="exec-search-btn"
            onClick={ handleClick }
          >
            Search
          </button>
        </div>
        <div className="inputs-container">
          <label htmlFor="ingredients-search" className="label-input">
            Ingredients
            <input
              className="input-filter"
              type="radio"
              id="ingredients-search"
              data-testid="ingredient-search-radio"
              name="filter"
              value="inputIngredients"
              onChange={ () => { setFilterBtn('inputIngredients'); } }
            />
          </label>

          <label htmlFor="name-search" className="label-input">
            Name
            <input
              className="input-filter"
              type="radio"
              name="filter"
              id="name-search"
              value="inputName"
              data-testid="name-search-radio"
              onChange={ () => { setFilterBtn('inputName'); } }
            />
          </label>
          <label htmlFor="letter-search" className="label-input">
            First Letter
            <input
              className="input-filter"
              type="radio"
              name="filter"
              value="inputLetter"
              data-testid="first-letter-search-radio"
              id="letter-search"
              onChange={ () => { setFilterBtn('inputLetter'); } }
            />
          </label>
        </div>
      </div>

    </section>
  );
}

export default SearchBar;
