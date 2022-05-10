import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import API from '../../api';

import ShareAndFavorite from '../../components/ShareAndFavorite';
import recipeSerialize from '../../helpers/serialize';

import * as S from './styles';
import { updateIngredientList, handleFinishRecipe } from './helperFunctions';
import { setInProgressRecipes } from '../../helpers/localStorage';
import { ingredientListValidation } from '../../validation';

export default function InProgress() {
  const [recipe, setRecipe] = useState({});
  const [type, setType] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);

  const { pathname } = useLocation();
  const { recipeId } = useParams();
  const { push } = useHistory();

  const pathType = () => (pathname.includes('foods') ? 'meals' : 'cocktails');

  useEffect(() => {
    setInProgressRecipes(pathname, recipeId);
    setType(pathname.includes('foods') ? 'meals' : 'drinks');
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    setIngredients(inProgressRecipes[pathType()][recipeId]);
  }, []);

  useEffect(() => {
    (async () => {
      if (type) {
        const res = await API(type, 'byId', recipeId);
        setRecipe(recipeSerialize(res, type));
        setIsDisabled(ingredientListValidation(ingredients, recipeSerialize(res, type)));
      }
    })();
  }, [type]);

  useEffect(() => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    inProgressRecipes[pathType()][recipeId] = [...ingredients];
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }, [ingredients]);

  const handleIngredientSelection = ({ target: { value, checked } }) => {
    setIngredients(updateIngredientList(ingredients, checked, value));
    setIsDisabled(ingredientListValidation(updateIngredientList(ingredients,
      checked, value), recipe));
  };

  return (
    <S.InProgressContainer>
      <S.RecipeThumb>
        <img
          data-testid="recipe-photo"
          src={ recipe.thumb }
          alt={ recipe.title }
        />
      </S.RecipeThumb>

      <S.RecipeInfos>
        <div>
          <h1 data-testid="recipe-title">{recipe.title}</h1>
          <ShareAndFavorite recipe={ recipe } />
        </div>

        <p data-testid="recipe-category">
          { type === 'meals' ? recipe.category : recipe.alcoholicOrNot }
        </p>

        <S.Ingredients className="IngredientList">
          <h3>Ingredients</h3>
          {(recipe.ingredients && recipe.measures)
            && recipe.ingredients.map((item, i) => (
              <label
                data-testid={ `${i}-ingredient-step` }
                key={ `${item}:${i}` }
                htmlFor={ `${i}-ingredient-name-and-measure` }
              >
                <input
                  type="checkbox"
                  data-testid={ `${i}-ingredient-name-and-measure` }
                  id={ `${i}-ingredient-name-and-measure` }
                  checked={ ingredients && ingredients
                    .some((ingredient) => ingredient === item) }
                  value={ `${item}` }
                  onChange={ handleIngredientSelection }
                />
                { `${item} : ${recipe.measures[i]}` }
              </label>
            ))}
        </S.Ingredients>

        <S.Instructions data-testid="instructions">
          <h3>Instructions</h3>
          {recipe.instructions}
        </S.Instructions>
      </S.RecipeInfos>
      <S.FinishRecipeBtn
        type="button"
        data-testid="finish-recipe-btn"
        disabled={ isDisabled }
        onClick={ () => {
          handleFinishRecipe(recipe);
          push('/done-recipes');
        } }
      >
        Finish recipe
      </S.FinishRecipeBtn>
    </S.InProgressContainer>
  );
}
