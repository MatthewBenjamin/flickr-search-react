// ActivePhotoImg.js
import React from 'react';

const PropTypes = React.PropTypes;

function ActivePhotoImg(props) {
  return (
    <div className="active-photo__img-container">
      <figure>
        <a href={props.imgLink}>
          <img
            srcSet={`${props.imgTinyURL} 240w,
                     ${props.imgSmallURL} 320w,
                     ${props.imgMediumURL} 640w,
                     ${props.imgLargeURL} 800w`}
            sizes="(max-width: 340px) 240px,
                   (max-width: 660px) 320px,
                   (max-width: 820px) 640px,
                   800px"
            src={props.imgMediumURL}
            alt={props.title}
          />
          <figcaption>
            <h3>{props.title}</h3>
          </figcaption>
        </a>
      </figure>
    </div>
  );
}

ActivePhotoImg.propTypes = {
  title: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  imgTinyURL: PropTypes.string.isRequired,
  imgSmallURL: PropTypes.string.isRequired,
  imgMediumURL: PropTypes.string.isRequired,
  imgLargeURL: PropTypes.string.isRequired,
};

export { ActivePhotoImg };
