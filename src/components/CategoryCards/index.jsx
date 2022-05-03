import PropTypes from 'prop-types';
import React from 'react';

export default function CategoryCards({ categories, onClick, categorySelected }) {
  const handleClick = (e) => {
    onClick(e.target.id === categorySelected ? '' : e.target.id);
  };

  return (
    <div>
      {categories && categories.map(({ strCategory }) => (
        <button
          data-testid={ `${strCategory}-category-filter` }
          type="button"
          id={ strCategory }
          onClick={ handleClick }
          key={ strCategory }
        >
          {strCategory}
        </button>
      ))}
      <button
        data-testid="All-category-filter"
        type="button"
        onClick={ () => onClick('') }
      >
        All
      </button>
    </div>
  );
}

CategoryCards.propTypes = {
  categories: PropTypes.array,
  onClick: PropTypes.func,
}.isRequired;
