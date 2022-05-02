import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipe() {
  const index = '0';

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Done Recipes</h2>
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
        {doneRecipes.map((recipe) => (
          <div key={ recipe.id }>
            <img
              src={ recipe.image }
              alt=""
              data-testid={ `${index}-horizontal-image` }
            />
            { recipe.type === 'Food'
              ? (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {' '}
                  { `${recipe.nationality} - ${recipe.category}` }
                </p>)
              : (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  { recipe.alcoholicOrNot }
                </p>)}
            <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
            <p data-testid={ `${index}-horizontal-done-date` }>Horizontal Done Date</p>
            <button
              type="button"
              data-testid={ `${index}-horizontal-share-btn` }
            >
              <img src={ shareIcon } alt="logo-share" />
            </button>
            { recipe.tags.map((tagName) => (
              <div key={ tagName }>
                <p
                  data-testid={ `${index}-${tagName}-horizontal-tag` }
                >
                  { tagName }
                </p>
              </div>))}
          </div>
        )) }
      </header>
    </div>
  );
}

export default DoneRecipe;
