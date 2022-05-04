import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { favoriteRecipe, isFavoriteRecipe } from '../../helpers/localStorage';

export default function ShareAndFavorite({ recipe }) {
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteRecipe = () => {
    favoriteRecipe(recipe);
    setIsFavorite(!isFavorite);
  };

  const onShareLink = () => {
    if (window.location.href.includes('in-progress')) {
      const newHref = window.location.href.replace('/in-progress', '');
      copy(newHref).then(() => {
        setCopied(true);
      });
    } else {
      copy(window.location.href).then(() => {
        setCopied(true);
      });
    }
  };

  useEffect(() => {
    setIsFavorite(isFavoriteRecipe(recipe));
  }, [recipe]);

  return (
    <div>
      <img
        data-testid="favorite-btn"
        role="presentation"
        onClick={ onFavoriteRecipe }
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        alt="favorite"
      />

      <button
        data-testid="share-btn"
        onClick={ onShareLink }
        type="button"
      >
        compartilhar
      </button>

      {copied && <p>Link copied! </p>}
    </div>
  );
}

ShareAndFavorite.propTypes = {
  recipe: PropTypes.object,
}.isRequired;
