import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { pathname } = useLocation();

  const [searchParams, setParams] = useState({ type: '', action: '', arg: '' });

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

      <button type="button" data-testid="exec-search-btn">
        Search
      </button>

    </div>
  );
};

export default SearchBar;
