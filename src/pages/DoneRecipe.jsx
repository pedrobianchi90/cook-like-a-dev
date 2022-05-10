import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileDone } from 'react-icons/ai';
import profileIcon from '../images/profileIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import '../style/HeaderStyle.css';
import '../style/CategoriesStyle.css';

const copy = require('clipboard-copy');

function DoneRecipe() {
  const [alert, setAlert] = useState(false);
  const [filter, setFilter] = useState('');

  const copyToClipboard = (url) => {
    copy(url);
    setAlert(!alert);
  };

  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <div>
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Done Recipes</h2>
        <AiOutlineFileDone className="icons-header" size="48px" />
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
      {doneRecipes
        && doneRecipes
          .filter(({ type }) => type.includes(filter)).map((recipe, index) => (
            <div key={ recipe.id }>
              {console.log(recipe.name)}
              { recipe.type === 'food'
                ? (
                  <>
                    <p data-testid={ `${index}-horizontal-top-text` }>
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
                    <p
                      data-testid={ `${index}-horizontal-done-date` }
                    >
                      {recipe.doneDate}

                    </p>
                    <button
                      type="button"
                      src={ shareIcon }
                      data-testid={ `${index}-horizontal-share-btn` }
                      onClick={ () => copyToClipboard(`http://localhost:3000/foods/${recipe.id}`) }
                    >
                      <img src={ shareIcon } alt="logo-share" />
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
                    <p
                      data-testid={ `${index}-horizontal-done-date` }
                    >
                      {recipe.doneDate}

                    </p>
                    <button
                      type="button"
                      src={ shareIcon }
                      data-testid={ `${index}-horizontal-share-btn` }
                      onClick={ () => copyToClipboard(`http://localhost:3000/drinks/${recipe.id}`) }
                    >
                      <img src={ shareIcon } alt="logo-share" />
                    </button>

                  </>)}
              { alert && <span>Link copied!</span> }
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
    </div>
  );
}

export default DoneRecipe;
