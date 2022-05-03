import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../../api';
import { TWELVE } from '../../helpers/constants';
import convertAndSlice from '../../helpers/func';

const SearchBar = ({ recipeFunc }) => {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [searchParams, setParams] = useState({ type: '', action: '', arg: '' });

  const search = async () => {
    const { type, action, arg } = searchParams;
    if (action === 'byLetter' && arg.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return;
    }
    const resRecipes = await API(type, action, arg);
    const convert = convertAndSlice(resRecipes, type, TWELVE);
    if (convert === undefined) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
      return;
    }
    if (convert.length < 2) {
      history.push(`${pathname}/${convert[0].id}`);
      return;
    }
    recipeFunc(convert);
  };

  useEffect(() => (
    pathname.includes('/foods')
      ? setParams({ ...searchParams, type: 'meals' })
      : setParams({ ...searchParams, type: 'drinks' })
  ), []);

  return (
    <div>

      <label htmlFor="ingredient-search-radio">
        <input
          type="radio"
          name="ingredient"
          id="ingredient-search-radio"
          data-testid="ingredient-search-radio"
          onClick={ () => {
            setParams({ ...searchParams, action: 'byIngredient' });
            console.log(searchParams);
          } }
        />
        Ingredient
      </label>

      <label htmlFor="name-search-radio">
        <input
          type="radio"
          name="ingredient"
          id="name-search-radio"
          data-testid="name-search-radio"
          onClick={ () => {
            setParams({ ...searchParams, action: 'byName' });
            console.log(searchParams);
          } }
        />
        Name
      </label>

      <label htmlFor="first-letter-search-radio">
        <input
          type="radio"
          name="ingredient"
          id="first-letter-search-radio"
          data-testid="first-letter-search-radio"
          onClick={ () => {
            setParams({ ...searchParams, action: 'byLetter' });
            console.log(searchParams);
          } }
        />
        First Letter
      </label>

      <input
        data-testid="search-input"
        onChange={ (e) => {
          setParams({ ...searchParams, arg: `${e.target.value}` });
          console.log(searchParams);
        } }
      />

      <button type="button" data-testid="exec-search-btn" onClick={ search }>
        Search
      </button>

    </div>
  );
};

SearchBar.propTypes = {
  recipeFunc: PropTypes.func,
}.isRequired;

export default SearchBar;
