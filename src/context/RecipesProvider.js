import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './RecipeContext';

function RecipesProvider({ children }) {
  const [searchInputs, setSearchInputs] = useState('');
  const [filterBtn, setFilterBtn] = useState('inputName');

  const store = {
    searchInputs,
    setSearchInputs,
    filterBtn,
    setFilterBtn,
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
