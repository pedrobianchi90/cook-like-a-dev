import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function Drinks() {
  const [filter, setfilter] = useState(false);

  const {
    drinks,
    getDrinks,
    drinksCategories,
    getDrinksCategories,
    filterDrinkCategory,
    getFilterDrinkCategory,
  } = useContext(RecipeContext);

  useEffect(() => {
    getDrinks();
    getDrinksCategories();
  }, []);

  const handleClick = async ({ target }) => {
    // if (filter) {
    //   setfilter(false);
    // } else {
    setfilter(true);
    // }
    await getFilterDrinkCategory(target.name);
  };

  return (
    <>
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ () => setfilter(false) }
        >
          All
        </button>
        { drinksCategories
          ? drinksCategories.map((category) => (
            <button
              key={ category.strCategory }
              type="button"
              name={ category.strCategory }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
            >
              {category.strCategory}
            </button>
          ))
          : LOADING}
      </div>
      <div>
        { filterDrinkCategory || drinks
          ? (filter ? filterDrinkCategory : drinks)
            .map((drink, index) => (
              <div
                key={ drink.idDrink }
                data-testid={ `${index}-recipe-card` }
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
    </>
  );
}

export default Drinks;
