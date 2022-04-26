import React from 'react';
import PropTypes from 'prop-types';
import myContext from './RecipeContext';

function RecipesProvider({ children }) {
  const store = {};
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
