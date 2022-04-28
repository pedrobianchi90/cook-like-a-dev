import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function ListDrinks() {
  const history = useHistory();
  const {
    drinks,
    filterDrinkCategory,
    filter,
  } = useContext(myContext);

  const redirectToDetails = (idToRedirect) => {
    history.push(`/drinks/${idToRedirect}`);
  };

  return (
    <div>
      { filterDrinkCategory || drinks
        ? (filter.bool ? filterDrinkCategory : drinks)
          .map((drink, index) => (
            <div
              key={ drink.idDrink }
              data-testid={ `${index}-recipe-card` }
              onClick={ () => redirectToDetails(drink.idDrink) }
              aria-hidden="true"
            >
              <img
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
                data-testid={ `${index}-card-img` }
              />
              <div>
                <span data-testid={ `${index}-card-name` }>{ drink.strDrink }</span>
              </div>
            </div>
          ))
        : LOADING}

    </div>
  );
}

export default ListDrinks;
