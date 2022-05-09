import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ShareAndFavorite from '../ShareAndFavorite';
import * as S from './styles';

export default function RecipeCard({ recipe, i, type }) {
  const { push } = useHistory();
  return (
    <S.RecipeCardContainer>
      <S.RecipeInfos
        data-testid={ `${i}-recipe-card` }
        onClick={ () => push(`${type}/${recipe.id}`) }
      >
        <img
          style={ { width: '100px' } }
          data-testid={ `${i}-card-img` }
          src={ recipe.thumb }
          alt={ recipe.title }
        />
        <div>
          <h3 data-testid={ `${i}-card-name` }>{recipe.title}</h3>
        </div>
      </S.RecipeInfos>
      <ShareAndFavorite recipe={ recipe } />
    </S.RecipeCardContainer>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    thumb: PropTypes.string,
    title: PropTypes.string,
  }),
}.isRequired;
