import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const RecipeContext = createContext();

function RecipeProvider({ children }) {
  return (
    <RecipeContext.Provider value={ { oloco: 'bixo' } }>
      { children }
    </RecipeContext.Provider>
  );
}

export const useRecipe = () => useContext(RecipeContext);

export default RecipeProvider;

RecipeProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
