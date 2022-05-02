import PropTypes from 'prop-types';
import React from 'react';

export default function VideoCard({ video }) {
  return (
    <div>
      { video && (
        <iframe
          data-testid="video"
          src={ video?.replace('watch?v=', 'embed/') }
          width={ 320 }
          height={ 240 }
          title="YouTube"
        />
      )}
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.string,
};

VideoCard.defaultProps = {
  video: undefined,
};
