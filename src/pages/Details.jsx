import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../Details.module.css';
import ListIngredientDetails from '../components/ListIngredientsDetails';
import myContext from '../context/RecipeContext';
import HeaderDetails from '../components/HeaderDetails';
import ListInstructionsRecomendation from '../components/ListInstructions';

function Details() {
  const location = useLocation();
  const myId = location.pathname.split('/')[2];
  const typeRecipe = location.pathname.split('/')[1];

  const { recipe, getRecipe } = useContext(myContext);

  useEffect(() => {
    getRecipe(typeRecipe, myId);
  }, [typeRecipe, myId]);

  return (
    <div>
      <HeaderDetails />
      <ListIngredientDetails />
      <ListInstructionsRecomendation />
      <Link
        to={ recipe[0].strMealThumb ? `/foods/${myId}/in-progress`
          : `/drinks/${myId}/in-progress` }
      >
        <button
          data-testid="start-recipe-btn"
          type="button"
          className={ style.footer }
        >
          StarRecipe
        </button>
      </Link>

    </div>
  );
}

export default Details;
