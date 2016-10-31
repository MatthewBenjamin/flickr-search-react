// ActivePhoto.js
import React from 'react';
import { ActivePhotoHeader } from './ActivePhotoHeader';
import { ActivePhotoImg } from './ActivePhotoImg';

const PropTypes = React.PropTypes;

function ActivePhoto(props) {
  return (
    <div className="active-photo">
      <ActivePhotoHeader query={props.query} />
      <ActivePhotoImg
        imgLink={props.activePhoto.imgLink}
        imgTinyURL={props.activePhoto.imgTinyURL}
        imgSmallURL={props.activePhoto.imgSmallURL}
        imgMediumURL={props.activePhoto.imgMediumURL}
        imgLargeURL={props.activePhoto.imgLargeURL}
        title={props.activePhoto.title}
      />
    </div>
  );
}

ActivePhoto.propTypes = {
  activePhoto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    imgTinyURL: PropTypes.string.isRequired,
    imgSmallURL: PropTypes.string.isRequired,
    imgMediumURL: PropTypes.string.isRequired,
    imgLargeURL: PropTypes.string.isRequired,
  }),
  query: PropTypes.string.isRequired,
};

export { ActivePhoto };
