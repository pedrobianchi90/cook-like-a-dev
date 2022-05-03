import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesHeader from '../components/RecipesHeader';
import DrinkInstruction from '../components/DrinkInstructions';
import IngredientsDrink from '../components/IngredientsDrink';
import myContext from '../context/RecipeContext';

function Progress() {
  const history = useHistory();
  const location = useLocation();
  const drinkId = location.pathname.split('/')[2];
  const {
    getDrinkInProgress,
    drinkInProgress,
    disableButton,
  } = useContext(myContext);

  useEffect(() => {
    getDrinkInProgress(drinkId);
  }, []);

  return (
    <div>
      {
        drinkInProgress
          ? (
            <>
              <RecipesHeader />
              <IngredientsDrink />
              <DrinkInstruction />
            </>
          )
          : 'Carregando...'
      }

      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ disableButton }
        onClick={ () => history.push('/done-recipes') }
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default Progress;
