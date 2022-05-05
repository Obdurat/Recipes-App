import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../../components/Header/index';

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('');

  const onShareLink = ({ target: { value, name } }) => {
    const newHref = window.location.href.replace('/favorite-recipes', '');
    copy(`${newHref}/${value}s/${name}`).then(() => {
      setCopied(true);
    });
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
    <div>
      <Header />
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ handleClick }
        value=""
      >
        All

      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ handleClick }
        value="food"
      >
        Food

      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ handleClick }
        value="drink"
      >
        Drinks

      </button>
      {favoriteRecipes && favoriteRecipes.filter((rec) => (rec.type.includes(filter)))
        .map((rec, index) => (
          <div key={ rec.id } className="card">
            <Link to={ `${rec.type}s/${rec.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                src={ rec.thumb ? `${rec.thumb}/preview` : `${rec.image}/preview` }
                alt={ rec.title }
              />
              <p
                data-testid={ `${index}-horizontal-name` }
              >
                {rec.title ? rec.title : rec.name}

              </p>
            </Link>
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              { rec.type === 'food'
                ? `${rec.nationality} - ${rec.category}`
                : `${rec.alcoholicOrNot}` }

            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{rec.doneDate}</p>
            <button
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ onShareLink }
              type="button"
              name={ rec.id }
              value={ rec.type }
              src="../../images/shareIcon.svg"
            >
              compartilhar
            </button>
            <input
              src="../../images/blackHeartIcon.svg"
              type="button"
              onClick={ handleUnfavorite }
              id={ rec.id }
              data-testid={ `${index}-horizontal-favorite-btn` }
            />

            {copied && <p>Link copied! </p>}
          </div>
        ))}

    </div>
  );
};

export default FavoriteRecipes;
