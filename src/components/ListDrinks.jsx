import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import '../style/List.css';

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
    <div className="list-container">
      { filterDrinkCategory || drinks
        ? (filter.bool ? filterDrinkCategory : drinks)
          .map((drink, index) => (
            <div
              key={ drink.idDrink }
              data-testid={ `${index}-recipe-card` }
              onClick={ () => redirectToDetails(drink.idDrink) }
              aria-hidden="true"
            >
              <div className="card-container">
                <img
                  src={ drink.strDrinkThumb }
                  alt={ drink.strDrink }
                  data-testid={ `${index}-card-img` }
                  className="list-picture"
                />
                <div>
                  <span
                    data-testid={ `${index}-card-name` }
                    className="list-name"
                  >
                    { drink.strDrink }
                  </span>
                </div>
              </div>
            </div>
          ))
        : LOADING}

    </div>
  );
}

export default ListDrinks;
