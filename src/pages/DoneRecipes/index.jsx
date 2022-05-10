import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../../components/Header/index';
import shareIcon from '../../images/shareIcon.svg';
import * as S from './styles';

const DoneRecipes = () => {
  const [doneRecipes, setDoneRecipes] = useState();
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
    const newHref = window.location.href.replace('/done-recipes', '');
    copyTime(`${newHref}/${value}s/${name}`);
  };

  const handleClick = ({ target: { value } }) => {
    setFilter(value);
  };

  useEffect(() => (
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')))
  ), []);

  return (
    <S.DoneRecipesContainer>
      <Header />
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
      {doneRecipes && doneRecipes.filter((rec) => (rec.type.includes(filter)))
        .map((rec, index) => (
          <S.DoneRecipeCard key={ rec.id } className="card">
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
              {rec.tags.map((tag) => (
                <span
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  key={ tag }
                >
                  {`${tag}`}

                </span>
              ))}
            </S.RecipeInfos>
            <S.Share>
              <img
                data-testid={ `${index}-horizontal-share-btn` }
                onClick={ onShareLink }
                name={ rec.id }
                value={ rec.type }
                src={ shareIcon }
                role="presentation"
                alt="share"
              />
            </S.Share>

          </S.DoneRecipeCard>
        ))}
      {copied && <S.Copied>Link copied!</S.Copied>}
    </S.DoneRecipesContainer>
  );
};

export default DoneRecipes;
