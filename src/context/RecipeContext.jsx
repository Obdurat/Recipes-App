import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [searchParams, setParams] = useState({ type: '', action: '', arg: '' });
  const context = {
    searchParams,
    setParams,
  };

  return (
    <RecipeContext.Provider value={ context }>
      { children }
    </RecipeContext.Provider>
  );
}

export const useRecipe = () => useContext(RecipeContext);

export default RecipeProvider;

RecipeProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
