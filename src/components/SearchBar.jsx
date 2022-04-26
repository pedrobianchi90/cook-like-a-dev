import React from 'react';

export default function SearchBar() {
  return (
    <section>
      <div>
        <label htmlFor="ingredients">
          Ingredients
          <input
          type="radio"
          id="ingredients"
          data-testid="ingredient-search-radio"
          name="filter"
          value="inputIngredients"
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
          />
        </label>
      </div>
    </section>
  )
}