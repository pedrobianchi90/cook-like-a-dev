import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import '../style/List.css';

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
    <div className="list-container">
      { filterMealCategory || meals
        ? (filter.bool ? filterMealCategory : meals)
          .map((meal, index) => (
            <div
              key={ meal.idMeal }
              data-testid={ `${index}-recipe-card` }
              onClick={ () => redirectToDetails(meal.idMeal) }
              aria-hidden="true"
            >
              <div className="card-container">
                <img
                  src={ meal.strMealThumb }
                  alt={ meal.strMeal }
                  data-testid={ `${index}-card-img` }
                  className="list-picture"
                />
                <span
                  data-testid={ `${index}-card-name` }
                  className="list-name"
                >
                  { meal.strMeal }

                </span>
              </div>
            </div>
          ))
        : LOADING }
    </div>
  );
}

export default ListFoods;
