import React, { useContext, useEffect, useState } from 'react';
import RecipeContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function Foods() {
  const [filter, setfilter] = useState(false);

  const {
    meals,
    getMeals,
    mealCategories,
    getMealCategories,
    filterMealCategory,
    getFilterMealCategory,
  } = useContext(RecipeContext);

  useEffect(() => {
    getMeals();
    getMealCategories();
  }, []);

  const handleClick = async ({ target }) => {
    // if (filter) {
    //   setfilter(false);
    // } else {
    //   setfilter(true);
    // }
    setfilter(true);
    await getFilterMealCategory(target.name);
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
        { mealCategories
          ? mealCategories.map((category) => (
            <button
              key={ category.strCategory }
              name={ category.strCategory }
              type="button"
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ handleClick }
            >
              {category.strCategory}
            </button>
          ))
          : LOADING}
      </div>
      <div>
        { filterMealCategory || meals
          ? (filter ? filterMealCategory : meals)
            .map((meal, index) => (
              <div
                key={ meal.idMeal }
                data-testid={ `${index}-recipe-card` }
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
    </>
  );
}

export default Foods;
