import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipesHeader from '../components/RecipesHeader';
// import DrinkInstruction from '../components/DrinkInstructions';
import IngredientsDrink from '../components/IngredientsDrink';
// import myContext from '../context/RecipeContext';
import fetchCocktailById from '../services/fetchCocktailById';

function Progress() {
  const location = useLocation();
  const drinkId = location.pathname.split('/')[2];
  // const { drinks } = useContext(myContext);

  const receiver = fetchCocktailById(drinkId);

  useEffect(() => {
    console.log(receiver.strDrinkThumb);
    console.log(receiver.strDrink);
    console.log(receiver.strCategory);
  });

  return (
    <div>
      {
        receiver
          ? (
            <>
              <RecipesHeader
                thumb={ receiver.strDrinkThumb }
                name={ receiver.strDrink }
                category={ receiver.strCategory }
              />
              <IngredientsDrink ingredients={ [receiver.strIngredient1] } />
              {/* <DrinkInstruction /> */}
            </>
          )
          : 'Carregando...'
      }

      <button type="button" data-testid="finish-recipe-btn">
        Finish Recipe
      </button>
    </div>
  );
}

export default Progress;
