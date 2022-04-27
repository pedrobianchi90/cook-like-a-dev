import React, { useContext, useState } from 'react';
import myContext from '../context/RecipeContext';
import { mealFilters } from '../helper/fetchMeal';
import { drinksFilters } from '../helper/fetchDinks';

export default function SearchBar() {
  const {
    setDrinksData,
    setFoodsData,
  } = useContext(myContext);

  const [searchInputs, setSearchInputs] = useState('');
  const [searchBtn, setSearchBtn] = useState('');

  const handleClick = async () => {
    if (searchInputs.lenght > 1 && filterBtn === 'inputLetter') {
      global.alert('Your search must have only 1 (one) character');
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
            id="ingredients"
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
            id="name"
            value="inputName"
            testid="name-search-radio"
            onChange={ () => { setFilterBtn('inputName'); } }
          />
        </label>

        <label htmlFor="letter">
          First Letter
          <input
            type="radio"
            name="filter"
            value="inputLetter"
            data-testid="exec-search-btn"
            id="letter"
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
