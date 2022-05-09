import PropTypes from 'prop-types';
import React from 'react';
import Container from './styles';

export default function IngredientsAndMeasures({ ingredients, measures }) {
  return (
    <Container>
      <h3> Ingredients </h3>
      {(ingredients && measures)
      && ingredients.map((item, i) => (
        <li key={ `${item}:${i}` } data-testid={ `${i}-ingredient-name-and-measure` }>
          { `${item}: ${measures[i]}` }
        </li>))}
    </Container>
  );
}

IngredientsAndMeasures.propTypes = {
  ingredients: PropTypes.array,
  measure: PropTypes.array,
}.isRequired;
