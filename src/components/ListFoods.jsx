import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function ListFoods() {
  const history = useHistory();
  const {
    meals,
    filterMealCategory,
    filter,
  } = useContext(myContext);

  const redirectToDetails = (idToRedirect) => {
    history.push(`/foods/${idToRedirect}`);
  };

  return (
    <div>
      { filterMealCategory || meals
        ? (filter.bool ? filterMealCategory : meals)
          .map((meal, index) => (
            <div
              key={ meal.idMeal }
              data-testid={ `${index}-recipe-card` }
              onClick={ () => redirectToDetails(meal.idMeal) }
              aria-hidden="true"
            >
              <img
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
                data-testid={ `${index}-card-img` }
              />
              <div>
                <span data-testid={ `${index}-card-name` }>{ meal.strMeal }</span>
              </div>
            </div>
          ))
        : LOADING }
    </div>
  );
}

export default ListFoods;
