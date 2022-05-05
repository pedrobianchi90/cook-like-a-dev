import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { addRecipe, removeRecipe } from '../helper/storageFavoriteRecipes';

const copy = require('clipboard-copy');

function HeaderDetails() {
  const location = useLocation();
  const { recipe } = useContext(myContext);
  const [alert, setAlert] = useState(false);
  const myId = location.pathname.split('/')[2];
  const typeRecipe = location.pathname.split('/')[1];

  const getStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const isTrue = getStorage.some(({ id }) => id === myId);

  const [isFavorite, setIsFavorite] = useState(isTrue);

  const detailRecipe = {
    id: myId,
    type: typeRecipe,
    nationality: recipe[0].strArea,
    category: recipe[0].strCategory,
    alcoholicOrNot: recipe[0].strAlcoholic
      ? recipe[0].strAlcoholic : '',
    name: recipe[0].strMeal ? recipe[0].strMeal : recipe[0].strDrink,
    image: recipe[0].strDrinkThumb ? recipe[0].strDrinkThumb : recipe[0].strMealThumb,
  };

  const copyToClipboard = (url) => {
    copy(url);
    setAlert(!alert);
  };

  const saveFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      removeRecipe(detailRecipe);
    } else {
      setIsFavorite(true);
      addRecipe(detailRecipe);
    }
  };

  return (
    <>
      <img
        src={ recipe[0].strDrinkThumb ? recipe[0].strDrinkThumb
          : recipe[0].strMealThumb }
        alt={ recipe.strDrink ? recipe[0].strDrink
          : recipe[0].strMeal }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        {recipe[0].strDrink ? recipe[0].strDrink
          : recipe[0].strMeal}

      </h2>
      { recipe[0].strDrinkThumb
        ? (
          <p data-testid="recipe-category">
            {`${recipe[0].strAlcoholic} ${recipe[0].strCategory}`}
          </p>)
        : <p data-testid="recipe-category">{recipe[0].strCategory}</p>}
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => copyToClipboard(`http://localhost:3000${location.pathname}`) }
      >
        <img
          src={ shareIcon }
          alt="Link de compartilhar"
        />
      </button>
      { alert && <span>Link copied!</span> }
      <button
        type="button"
        data-testid="favorite-btn"
        onClick={ saveFavorite }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="botão de Favoritar"
        />
      </button>
    </>
  );
}

export default HeaderDetails;
