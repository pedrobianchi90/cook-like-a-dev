import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function RecipesHeader() {
  const iconStyle = { fontSize: '24px' };

  const { drinkInProgress } = useContext(myContext);

  return (
    <div>
      <img data-testid="recipe-photo" src={ drinkInProgress.strDrinkThumb } alt="" />

      <h3 data-testid="recipe-title">{ drinkInProgress.strDrink }</h3>

      <button type="button" data-testid="share-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <button type="button" data-testid="favorite-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <h4>{ drinkInProgress.strCategory }</h4>
    </div>
  );
}

export default RecipesHeader;
