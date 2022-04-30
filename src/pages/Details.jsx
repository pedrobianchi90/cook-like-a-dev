import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../Footer.css';
import { foodById, drinkById } from '../services/fetchRecipeById';

function Details() {
  const location = useLocation();
  const myId = location.pathname.split('/')[2];
  // const myId = '52941'; // food
  // const myId = '12798'; // drink
  const typeRecipe = location.pathname.split('/')[1];
  // console.log(location.pathname.split('/')[2]);

  const [state, setState] = useState('Xablau');
  console.log(state);

  useEffect(() => {
    const getRecipe = async (recipe) => {
      let myRecipe;
      if (recipe === 'foods') myRecipe = await foodById(myId);
      if (recipe === 'drinks') myRecipe = await drinkById(myId);
      setState(myRecipe);
    };
    getRecipe(typeRecipe);
  }, [myId, typeRecipe]);

  return (
    <div>
      <img
        src={ state[0].strDrinkThumb ? state[0].strDrinkThumb
          : state[0].strMealThumb }
        alt={ state.strDrink ? state[0].strDrink
          : state[0].strMeal }
        data-testid="recipe-photo"
      />
      <h2 data-testid="recipe-title">
        {state.strDrink ? state[0].strDrink
          : state[0].strMeal}

      </h2>
      { state[0].strDrinkThumb ? <span>{state[0].strAlcoholic}</span> : ''}
      <button type="button" data-testid="share-btn">{ shareIcon }</button>
      <button type="button" data-testid="favorite-btn">{ whiteHeartIcon }</button>
      <p data-testid="recipe-category">{state[0].strCategory}</p>
      <ul>
        Ingredientes:
        <li data-testid="0-ingredient-name-and-measure">
          {`${state[0].strIngredient1} - ${state[0].strMeasure1}`}
        </li>
        <li data-testid="1-ingredient-name-and-measure">
          {`${state[0].strIngredient2} - ${state[0].strMeasure2}`}
        </li>
        <li>{`${state[0].strIngredient3} - ${state[0].strMeasure3}`}</li>
        <li>{`${state[0].strIngredient4} - ${state[0].strMeasure4}`}</li>
        <li>{`${state[0].strIngredient5} - ${state[0].strMeasure5}`}</li>
        {/* <li>{`${state[0].strIngredient6} - ${state[0].strMeasure6}`}</li>
        <li>{`${state[0].strIngredient7} - ${state[0].strMeasure7}`}</li>
        <li>{`${state[0].strIngredient8} - ${state[0].strMeasure8}`}</li>
        <li>{`${state[0].strIngredient9} - ${state[0].strMeasure9}`}</li>
        <li>{`${state[0].strIngredient10} - ${state[0].strMeasure10}`}</li>
        <li>{`${state[0].strIngredient11} - ${state[0].strMeasure11}`}</li>
        <li>{`${state[0].strIngredient12} - ${state[0].strMeasure12}`}</li>
        <li>{`${state[0].strIngredient13} - ${state[0].strMeasure13}`}</li>
        <li>{`${state[0].strIngredient14} - ${state[0].strMeasure14}`}</li>
        <li>{`${state[0].strIngredient15} - ${state[0].strMeasure15}`}</li>
        <li>{`${state[0].strIngredient16} - ${state[0].strMeasure16}`}</li>
        <li>{`${state[0].strIngredient17} - ${state[0].strMeasure17}`}</li>
        <li>{`${state[0].strIngredient18} - ${state[0].strMeasure18}`}</li>
        <li>{`${state[0].strIngredient19} - ${state[0].strMeasure19}`}</li>
        <li>{`${state[0].strIngredient20} - ${state[0].strMeasure20}`}</li> */}
      </ul>
      <ul data-testid="instructions">
        Instruções:
        <li>{state[0].strInstructions}</li>
      </ul>
      <ul>
        Recomended
        <li data-testid="0-recomendation-card"> cards de recomendção...</li>
      </ul>
      { state[0].strMealThumb
        ? (
          <video data-testid="video" width="320" height="240" controls muted>
            <source src={ state[0].strYoutube } type="video/mp4" />

            Your browser does not support the video tag.
          </video>)
        : ''}
      <Link
        to={ state[0].strMealThumb ? `/foods/${myId}/in-progress`
          : `/drinks/${myId}/in-progress` }
      >
        <button
          data-testid="start-recipe-btn"
          type="button"
          c
          lassName="footer"
        >
          StarRecipe
        </button>
      </Link>
    </div>
  );
}

export default Details;
