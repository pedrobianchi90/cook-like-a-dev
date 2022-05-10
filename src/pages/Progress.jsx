import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import IngredientsDrink from '../components/IngredientsDrink';
import myContext from '../context/RecipeContext';
import HeaderDetails from '../components/HeaderDetails';
import ListInstructionsRecomendation from '../components/ListInstructions';
import '../style/DetailsStyle.css';
import '../style/ProgressStyle.css';

function Progress() {
  const history = useHistory();
  const location = useLocation();
  const progressId = location.pathname.split('/')[2];
  const typeRecipe = location.pathname.split('/')[1].split('s')[0];
  const {
    getInProgress,
    inProgress,
    disableButton,
    getRecipe,
  } = useContext(myContext);
  console.log(inProgress);

  useEffect(() => {
    getInProgress(progressId, typeRecipe);
  }, []);

  useEffect(() => {
    getRecipe(typeRecipe, progressId);
  }, [typeRecipe, progressId]);

  return (
    <div>
      {
        inProgress
          ? (
            <>
              <HeaderDetails />
              <IngredientsDrink />
              <ListInstructionsRecomendation />
            </>
          )
          : 'Carregando...'
      }

      <button
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ disableButton }
        onClick={ () => history.push('/done-recipes') }
        className="footer-progress"
      >
        Finish Recipe
      </button>
    </div>
  );
}

export default Progress;
