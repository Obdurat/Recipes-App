import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../../components/Header/index';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import shareIcon from '../../images/shareIcon.svg';
import * as S from './styles';

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('');

  const copyTime = (item) => {
    const ONE_SECOND = 2000;
    copy(item).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, ONE_SECOND);
    });
  };

  const onShareLink = ({ target: { value, name } }) => {
    const newHref = window.location.href.replace('/favorite-recipes', '');
    copyTime(`${newHref}/${value}s/${name}`);
  };

  const handleClick = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleUnfavorite = ({ target }) => {
    const newFav = favoriteRecipes.filter((rec) => target.id !== rec.id);
    setFavoriteRecipes(newFav);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFav));
  };

  useEffect(() => (
    setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')))
  ), []);

  return (
    <>
      <Header />
      <S.FavoriteRecipesContainer>
        <S.Option>
          <S.Button
            data-testid="filter-by-all-btn"
            type="button"
            onClick={ handleClick }
            value=""
          >
            All
          </S.Button>
          <S.Button
            data-testid="filter-by-food-btn"
            type="button"
            onClick={ handleClick }
            value="food"
          >
            Food
          </S.Button>
          <S.Button
            data-testid="filter-by-drink-btn"
            type="button"
            onClick={ handleClick }
            value="drink"
          >
            Drinks
          </S.Button>
        </S.Option>
        {favoriteRecipes && favoriteRecipes.filter((rec) => (rec.type.includes(filter)))
          .map((rec, index) => (
            <S.FavoriteRecipeCard key={ rec.id } className="card">
              <S.RecipeInfos to={ `${rec.type}s/${rec.id}` }>
                <img
                  data-testid={ `${index}-horizontal-image` }
                  src={ rec.thumb ? `${rec.thumb}/preview` : `${rec.image}/preview` }
                  alt={ rec.title }
                />
                <div>
                  <h3
                    data-testid={ `${index}-horizontal-name` }
                  >
                    {rec.title ? rec.title : rec.name}
                  </h3>
                  <p
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { rec.type === 'food'
                      ? `${rec.nationality} - ${rec.category}`
                      : `${rec.alcoholicOrNot}` }
                  </p>
                  <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
                </div>
              </S.RecipeInfos>
              <S.ShareAndFavoriteContainer>
                <div>
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    onClick={ onShareLink }
                    role="presentation"
                    name={ rec.id }
                    value={ rec.type }
                    alt="share"
                    src={ shareIcon }
                  />
                  <img
                    src={ blackHeartIcon }
                    type="button"
                    onClick={ handleUnfavorite }
                    id={ rec.id }
                    alt="favorite"
                    role="presentation"
                    data-testid={ `${index}-horizontal-favorite-btn` }
                  />
                </div>
              </S.ShareAndFavoriteContainer>
            </S.FavoriteRecipeCard>
          ))}

        {copied && <S.Copied>Link copied! </S.Copied>}
      </S.FavoriteRecipesContainer>
    </>
  );
};

export default FavoriteRecipes;
