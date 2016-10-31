// PhotoList.js
import React from 'react';
import { PhotoInfo } from './PhotoInfo';

const PropTypes = React.PropTypes;

function makePhotoInfoList(photoResults, query) {
  const PhotoInfoList = photoResults.map(function (result, resultIndex) {
    return (
      <PhotoInfo
        title={result.title}
        imgThumbnailURL={result.imgThumbnailURL}
        key={result.id}
        activeLink={`/search?query=${query}&active_link=${resultIndex}`}
      />
    );
  });

  return PhotoInfoList;
}

function PhotoList(props) {
  const PhotoResults = makePhotoInfoList(props.photoResults, props.query);
  return (
    <ul className="results-list">{ PhotoResults }</ul>
  );
}

PhotoList.propTypes = {
  photoResults: PropTypes.array.isRequired,
  query: PropTypes.string.isRequired,
};

export { PhotoList };
