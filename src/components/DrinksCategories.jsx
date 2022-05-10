import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';
import '../style/CategoriesStyle.css';

const LOADING = 'Carregando...';

function DrinksCategories() {
  const {
    drinksCategories,
    getFilterDrinkCategory,
    filter,
    getFilter,
  } = useContext(myContext);

  const handleClick = async ({ target }) => {
    if (filter.name === target.name) {
      const receiver = filter.bool;
      getFilter({ bool: !receiver, name: target.name });
    } else {
      getFilter({ bool: true, name: target.name });
    }
    await getFilterDrinkCategory(target.name);
  };

  return (
    <div className="categorie-cantainer">
      <button
        className="bttn-categories"
        type="button"
        name="All"
        data-testid="All-category-filter"
        onClick={ () => (
          getFilter({ bool: false, name: 'All' })
        ) }
      >
        All
      </button>
      { drinksCategories
        ? drinksCategories.map((category) => (
          <button
            className="bttn-categories"
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
  );
}

export default DrinksCategories;
