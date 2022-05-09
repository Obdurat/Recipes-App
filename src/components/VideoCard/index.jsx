import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

export default function VideoCard({ video }) {
  return (
    <S.VideoCardContainer>
      { video && (
        <S.Iframe
          data-testid="video"
          src={ video?.replace('watch?v=', 'embed/') }
          width={ 320 }
          height={ 240 }
          title="YouTube"
        />
      )}
    </S.VideoCardContainer>
  );
}

VideoCard.propTypes = {
  video: PropTypes.string,
};

VideoCard.defaultProps = {
  video: undefined,
};
