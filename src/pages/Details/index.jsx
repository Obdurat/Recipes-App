import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';

import API from '../../api';
import {
  verifyIsDoneRecipe,
  verifyIsInProgressRecipe,
} from '../../helpers/localStorage';
import RecommendedRecipesCard from '../../components/RecommendedRecipesCard';
import * as S from './styles';
import recipeSerialize from '../../helpers/serialize';
import IngredientsAndMeasures from '../../components/IngredientsAndMeasures';
import VideoCard from '../../components/VideoCard';
import ShareAndFavorite from '../../components/ShareAndFavorite';

export default function Details() {
  const [recipe, setRecipe] = useState({});
  const [type, setType] = useState('');
  const [isDoneRecipe, setIsDoneRecipe] = useState(true);
  const [isInProgressRecipe, setIsInProgressRecipe] = useState(false);

  const { pathname } = useLocation();
  const { recipeId } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    setType(pathname.includes('foods') ? 'meals' : 'drinks');
    setIsDoneRecipe(!verifyIsDoneRecipe(recipeId));
    setIsInProgressRecipe(!!verifyIsInProgressRecipe(recipeId,
      pathname.includes('foods') ? 'meals' : 'cocktails'));
  }, []);

  useEffect(() => {
    (async () => {
      if (type) {
        const res = await API(type, 'byId', recipeId);
        setRecipe(recipeSerialize(res, type));
      }
    })();
  }, [type]);

  return (
    <div>
      <h1 data-testid="recipe-title">{recipe.title}</h1>
      <img
        data-testid="recipe-photo"
        style={ { width: '40vw' } }
        src={ recipe.thumb }
        alt={ recipe.title }
      />

      <ShareAndFavorite recipe={ recipe } />

      <p data-testid="recipe-category">
        { type === 'meals' ? recipe.category : recipe.alcoholicOrNot }
      </p>

      <IngredientsAndMeasures
        ingredients={ recipe.ingredients }
        measures={ recipe.measures }
      />

      <p data-testid="instructions">{recipe.instructions}</p>

      {type && <RecommendedRecipesCard type={ type === 'meals' ? 'drinks' : 'meals' } />}

      <VideoCard video={ recipe.video } />

      { isDoneRecipe && (
        <S.StartRecipeBtn
          data-testid="start-recipe-btn"
          type="button"
          onClick={ () => push(`${pathname}/in-progress`) }
        >
          { isInProgressRecipe ? 'Continue Recipe' : 'Start Recipe' }
        </S.StartRecipeBtn>
      )}
    </div>
  );
}
