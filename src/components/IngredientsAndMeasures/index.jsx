import PropTypes from 'prop-types';
import React from 'react';

export default function IngredientsAndMeasures({ ingredients, measures }) {
  return (
    <div>
      {(ingredients && measures)
      && ingredients.map((item, i) => (
        <p key={ `${item}:${i}` } data-testid={ `${i}-ingredient-name-and-measure` }>
          { `${item} : ${measures[i]}` }
        </p>))}
    </div>
  );
}

IngredientsAndMeasures.propTypes = {
  ingredients: PropTypes.array,
  measure: PropTypes.array,
}.isRequired;
