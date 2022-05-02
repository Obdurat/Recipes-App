import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import API from '../../api';
import recipeSerialize from '../../helpers/serialize';
import * as S from './styles';

const SIX = 6;

export default function RecommendedRecipesCard({ type }) {
  const [recommendation, setRecommendations] = useState([]);
  const [cType, setCType] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    setCType(type === 'FOOD' ? 'DRINK' : 'FOOD');
    setKey(type === 'FOOD' ? 'drinks' : 'meals');
  }, []);

  const convertRecommendations = (obj) => obj[key]?.slice(0, SIX)
    ?.map((item) => recipeSerialize({ [key]: [item] }, cType));

  useEffect(() => {
    (async () => {
      if (cType) {
        const res = await API(cType, 'byName', '');
        setRecommendations(
          convertRecommendations(res) || {},
        );
      }
    })();
  }, [cType]);

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
