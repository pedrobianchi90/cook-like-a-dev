import React, { useContext, useEffect } from 'react';
import myContext from '../context/RecipeContext';

function RecipesHeader() {
  const { drinks } = useContext(myContext);
  const iconStyle = {
    'font-size': '24px',
  };

  useEffect(() => (
    console.log(drinks)
  ));

  return (
    <div>
      <img data-testid="recipe-photo" src={ drinks[0].strDrinkThumb } alt="" />

      <h3 data-testid="recipe-title">{ drinks[0].strDrink }</h3>

      <button type="button" data-testid="share-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <button type="button" data-testid="favorite-btn">
        <i style={ iconStyle } className="fa">&#xf1e0;</i>
      </button>

      <h4>{ drinks[0].strCategory }</h4>
    </div>
  );
}

export default RecipesHeader;
