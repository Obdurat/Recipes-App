import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import API from '../../api';
import { SIX } from '../../helpers/constants';
import convertAndSlice from '../../helpers/func';
import * as S from './styles';

export default function RecommendedRecipesCard({ type }) {
  const [recommendation, setRecommendations] = useState([]);

  useEffect(() => {
    (async () => {
      if (type) {
        const res = await API(type, 'byName', '');
        setRecommendations(
          convertAndSlice(res, type, SIX) || {},
        );
      }
    })();
  }, [type]);

  return (
    <S.RecommendationCard>

      { recommendation.map((item, index) => (
        <div
          key={ `${index}:id` }
          data-testid={ `${index}-recomendation-card` }
        >
          <img src={ item.thumb } alt={ item.title } />
          <h1
            data-testid={ `${index}-recomendation-title` }
          >
            {item.title}
          </h1>
        </div>
      ))}

    </S.RecommendationCard>
  );
}

RecommendedRecipesCard.propTypes = {
  type: PropTypes.string,
}.isRequired;
