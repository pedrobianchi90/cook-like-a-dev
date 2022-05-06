import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { removeRecipe } from '../helper/storageFavoriteRecipes';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../style/HeaderStyle.css';

const copy = require('clipboard-copy');

function FavoriteRecipe() {
  const [alert, setAlert] = useState(false);
  const [filter, setFilter] = useState('');
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [favorites, setFavorites] = useState(favoriteRecipes);

  const copyToClipboard = (url) => {
    copy(url);
    setAlert(!alert);
  };

  const removeFromPage = (value) => {
    const filterFavorites = favorites.filter((recipe) => recipe.name !== value);
    setFavorites(filterFavorites);
  };

  return (
    <div>
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Favorite Recipes</h2>
        <GrFavorite className="icons-header" size="45px" />
      </header>
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
        onClick={ () => setFilter('food') }
      >
        Food

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => setFilter('drink') }
      >
        Drinks

      </button>
      {favorites
        .filter(({ type }) => type.includes(filter)).map((recipe, index) => (
          <div key={ recipe.id }>
            {console.log(recipe)}
            { recipe.type === 'food'
              ? (
                <>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {`${recipe.nationality} - ${recipe.category}`}
                  </p>
                  <Link to={ `/foods/${recipe.id}` }>
                    <img
                      src={ recipe.image }
                      alt="logo-food"
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
                  </Link>
                  <button
                    type="button"
                    src={ shareIcon }
                    data-testid={ `${index}-horizontal-share-btn` }
                    onClick={ () => copyToClipboard(`http://localhost:3000/foods/${recipe.id}`) }
                  >
                    <img src={ shareIcon } alt="logo-share" />
                  </button>
                  <button
                    type="button"
                    src={ blackHeartIcon }
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => {
                      removeRecipe(recipe);
                      removeFromPage(recipe.name);
                    } }
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
                      alt="logo-drink"
                      data-testid={ `${index}-horizontal-image` }
                    />
                    <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
                  </Link>
                  <button
                    type="button"
                    src={ shareIcon }
                    data-testid={ `${index}-horizontal-share-btn` }
                    onClick={ () => copyToClipboard(`http://localhost:3000/drinks/${recipe.id}`) }
                  >
                    <img src={ shareIcon } alt="logo-share" />
                  </button>
                  <button
                    type="button"
                    // value={ recipe.name }
                    src={ blackHeartIcon }
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    onClick={ () => {
                      removeRecipe(recipe);
                      removeFromPage(recipe.name);
                    } }
                    // onChange={ () => removeFromPage(recipe.name) }
                  >
                    <img src={ blackHeartIcon } alt="logo-share" />
                  </button>

                </>)}
            { alert && <span>Link copied!</span> }
          </div>
        )) }
    </div>
  );
}

export default FavoriteRecipe;
