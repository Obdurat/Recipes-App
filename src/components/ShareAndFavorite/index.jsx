import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { favoriteRecipe, isFavoriteRecipe } from '../../helpers/localStorage';
import shareIcon from '../../images/shareIcon.svg';
import * as S from './styles';

export default function ShareAndFavorite({ recipe, share }) {
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteRecipe = () => {
    favoriteRecipe(recipe);
    setIsFavorite(!isFavorite);
  };

  const copyTime = (item) => {
    const ONE_SECOND = 2000;
    copy(item).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, ONE_SECOND);
    });
  };

  const onShareLink = () => {
    if (window.location.href.includes('in-progress')) {
      const newHref = window.location.href.replace('/in-progress', '');
      copyTime(newHref);
    } else {
      copyTime(window.location.href);
    }
  };

  useEffect(() => {
    setIsFavorite(isFavoriteRecipe(recipe));
  }, [recipe]);

  return (
    <S.ShareAndFavoriteContainer>
      <div>
        <img
          data-testid="favorite-btn"
          role="presentation"
          onClick={ onFavoriteRecipe }
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          alt="favorite"
        />
        {
          share
          && <img
            data-testid="share-btn"
            onClick={ onShareLink }
            role="presentation"
            src={ shareIcon }
            alt="share"
            type="button"
          />
        }
        {copied && <p>Link copied! </p>}
      </div>
    </S.ShareAndFavoriteContainer>
  );
}

ShareAndFavorite.propTypes = {
  recipe: PropTypes.object,
}.isRequired;
