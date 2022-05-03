import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe, i, type }) {
  return (
    <Link
      to={ `${type}/${recipe.id}` }
      data-testid={ `${i}-recipe-card` }
    >
      <img
        style={ { width: '100px' } }
        data-testid={ `${i}-card-img` }
        src={ recipe.thumb }
        alt={ recipe.title }
      />
      <h3 data-testid={ `${i}-card-name` }>{recipe.title}</h3>
    </Link>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;
