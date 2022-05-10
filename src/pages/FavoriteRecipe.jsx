import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrFavorite } from 'react-icons/gr';
import { removeRecipe } from '../helper/storageFavoriteRecipes';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../style/HeaderStyle.css';
import '../style/CategoriesStyle.css';
import '../style/FavoriteStyle.css';

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
      <div className="categorie-cantainer">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('') }
          className="bttn-categories"
        >
          All

        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('food') }
          className="bttn-categories"
        >
          Food

        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
          className="bttn-categories"
        >
          Drinks

        </button>
      </div>
      {favorites
        .filter(({ type }) => type.includes(filter)).map((recipe, index) => (
          <div key={ recipe.id }>
            {console.log(recipe)}
            { recipe.type === 'food'
              ? (
                <div className="list-container-favorite">
                  <div className="card-container-favorite">
                    <p
                      data-testid={ `${index}-horizontal-top-text` }
                      className="list-name-favorite"
                    >
                      {`${recipe.nationality} - ${recipe.category}`}
                    </p>
                    <Link to={ `/foods/${recipe.id}` }>
                      <img
                        src={ recipe.image }
                        alt="logo-food"
                        data-testid={ `${index}-horizontal-image` }
                        className="list-picture-favorite"
                      />
                      <p
                        data-testid={ `${index}-horizontal-name` }
                        className="list-name-recipe"
                      >
                        {recipe.name}

                      </p>
                    </Link>
                    <div className="bttn-container-favorite">
                      { alert && <span className="favorite-link">Link copied!</span> }
                      <button
                        type="button"
                        src={ shareIcon }
                        data-testid={ `${index}-horizontal-share-btn` }
                        onClick={ () => copyToClipboard(`http://localhost:3000/foods/${recipe.id}`) }
                        className="favorite-bttn"
                      >
                        <img src={ shareIcon } alt="logo-share" />
                      </button>
                      <button
                        type="button"
                        src={ blackHeartIcon }
                        data-testid={ `${index}-horizontal-favorite-btn` }
                        className="favorite-bttn"
                        onClick={ () => {
                          removeRecipe(recipe);
                          removeFromPage(recipe.name);
                        } }
                      >
                        <img src={ blackHeartIcon } alt="logo-share" />
                      </button>
                    </div>
                  </div>
                </div>)
              : (
                <div className="list-container-favorite">
                  <div className="card-container-favorite">
                    <p
                      data-testid={ `${index}-horizontal-top-text` }
                      className="list-name-favorite"
                    >
                      {recipe.alcoholicOrNot}
                    </p>
                    <Link to={ `/drinks/${recipe.id}` }>
                      <img
                        src={ recipe.image }
                        alt="logo-drink"
                        data-testid={ `${index}-horizontal-image` }
                        className="list-picture-favorite"
                      />
                      <p
                        data-testid={ `${index}-horizontal-name` }
                        className="list-name-recipe"
                      >
                        {recipe.name}

                      </p>
                    </Link>
                    <div className="bttn-container-favorite">
                      { alert && <span className="favorite-link">Link copied!</span> }
                      <button
                        type="button"
                        src={ shareIcon }
                        data-testid={ `${index}-horizontal-share-btn` }
                        onClick={ () => copyToClipboard(`http://localhost:3000/drinks/${recipe.id}`) }
                        className="favorite-bttn"
                      >
                        <img src={ shareIcon } alt="logo-share" />
                      </button>
                      <button
                        type="button"
                        // value={ recipe.name }
                        src={ blackHeartIcon }
                        data-testid={ `${index}-horizontal-favorite-btn` }
                        className="favorite-bttn"
                        onClick={ () => {
                          removeRecipe(recipe);
                          removeFromPage(recipe.name);
                        } }
                      >
                        <img src={ blackHeartIcon } alt="logo-share" />
                      </button>
                    </div>
                  </div>
                </div>)}
          </div>
        )) }
    </div>
  );
}

export default FavoriteRecipe;
