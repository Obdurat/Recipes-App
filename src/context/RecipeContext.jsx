import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { dark, light } from '../styles/theme';

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
  const [searchParams, setParams] = useState({ type: '', action: '', arg: '' });
  const [theme, setTheme] = useState(dark);
  const [showSearchModal, setShowSearchModal] = useState();

  const changeTheme = () => {
    if (theme.isDark) {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  // eslint-disable-next-line react/no-multi-comp

  const context = {
    searchParams,
    setParams,
    theme,
    setTheme,
    showSearchModal,
    setShowSearchModal,
    changeTheme,
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
