import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

const LOADING = 'Carregando...';

function FoodsCategories() {
  const {
    mealCategories,
    filter,
    getFilter,
    getFilterMealCategory,
  } = useContext(myContext);

  const handleClick = async ({ target }) => {
    if (filter.name === target.name) {
      const receiver = filter.bool;
      getFilter({ bool: !receiver, name: target.name });
    } else {
      getFilter({ bool: true, name: target.name });
    }
    await getFilterMealCategory(target.name);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => getFilter({ bool: false, name: 'All' }) }
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
  );
}

export default FoodsCategories;
