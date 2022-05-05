import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import Header from '../../components/Header/index';
import shareIcon from '../../images/shareIcon.svg';

const DoneRecipes = () => {
  const [doneRecipes, setDoneRecipes] = useState();
  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState('');

  const onShareLink = ({ target: { value, name } }) => {
    const newHref = window.location.href.replace('/done-recipes', '');
    copy(`${newHref}/${value}s/${name}`).then(() => {
      setCopied(true);
    });
  };

  const handleClick = ({ target: { value } }) => {
    setFilter(value);
  };

  useEffect(() => (
    setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')))
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
      {doneRecipes && doneRecipes.filter((rec) => (rec.type.includes(filter)))
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
              src={ shareIcon }
            >
              compartilhar
            </button>

            {copied && <p>Link copied! </p>}
            {rec.tags.map((tag) => (
              <span
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ tag }
              >
                {`${tag}`}

              </span>
            ))}
          </div>
        ))}

    </div>
  );
};

export default DoneRecipes;
