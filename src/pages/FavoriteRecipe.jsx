import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const copy = require('clipboard-copy');

function FavoriteRecipe() {
  const [alert, setAlert] = useState(false);
  const [filter, setFilter] = useState('');

  const copyToClipboard = (url) => {
    copy(url);
    setAlert(!alert);
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Favorite Recipes</h2>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('') }
        >
          All

        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('Food') }
        >
          Food

        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('Drink') }
        >
          Drinks

        </button>
        {doneRecipes.filter(({ type }) => type.includes(filter)).map((recipe, index) => (
          <div key={ recipe.id }>
            { recipe.type === 'Food'
              ? (
                <>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {' '}
                    {`${recipe.nationality} - ${recipe.category}`}
                  </p>
                  <Link to={ `/foods/${recipe.id}` }>
                    <img
                      src={ recipe.image }
                      alt=""
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
                  </Link>
                  <button
                    type="button"
                    data-testid={ `${index}-horizontal-share-btn` }
                    onClick={ () => copyToClipboard(`http://localhost:3000/foods/${recipe.id}`) }
                  >
                    <img src={ shareIcon } alt="logo-share" />
                  </button>
                  <button
                    type="button"
                  >
                    <img src={ blackHeartIcon } alt="logo-share" />
                  </button>

                </>)
              : (
                <>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {recipe.alcoholicOrNot}
                  </p>
                  <Link to={ `/drinks/${recipe.id}` }>
                    <img
                      src={ recipe.image }
                      alt=""
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
                  </Link>
                  <button
                    type="button"
                    data-testid={ `${index}-horizontal-share-btn` }
                    onClick={ () => copyToClipboard(`http://localhost:3000/drinks/${recipe.id}`) }
                  >
                    <img src={ shareIcon } alt="logo-share" />
                  </button>
                  <button
                    type="button"
                  >
                    <img src={ blackHeartIcon } alt="logo-share" />
                  </button>

                </>)}
            { alert && <span>Link copied!</span> }
          </div>
        )) }
      </header>
    </div>
  );
}

export default FavoriteRecipe;
