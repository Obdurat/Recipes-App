import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './styles';

export default function CategoryCards({ categories, onClick, categorySelected }) {
  const [selected, setSelected] = useState('all');

  const handleClick = (e) => {
    setSelected(e.target.id);
    onClick(e.target.id === categorySelected ? '' : e.target.id);
  };

  return (
    <S.CategoryCardsContainer>
      <div>
        <S.Button
          data-testid="All-category-filter"
          type="button"
          onClick={ handleClick }
          id=""
          selected={ selected }
        >
          All
        </S.Button>
        {categories && categories.map(({ strCategory }) => (
          <S.Button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            id={ strCategory }
            onClick={ handleClick }
            key={ strCategory }
            selected={ selected }
          >
            {strCategory.split(' ')[0]}
          </S.Button>
        ))}
      </div>
    </S.CategoryCardsContainer>
  );
}

CategoryCards.propTypes = {
  categories: PropTypes.array,
  onClick: PropTypes.func,
}.isRequired;
