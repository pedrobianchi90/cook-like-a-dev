import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './RecipeContext';

function RecipesProvider({ children }) {
  const [drinksData, setDrinksData] = useState('');
  const [foodsData, setFoodsData] = useState('inputName');

  const store = {
    drinksData,
    setDrinksData,
    foodsData,
    setFoodsData,
  };

  return (
    <myContext.Provider value={ store }>
      {children}
    </myContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

export default RecipesProvider;
