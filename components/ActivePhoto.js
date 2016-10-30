// ActivePhoto.js
import React from 'react'
import { Link } from 'react-router'

const PropTypes = React.PropTypes;

// TODO: responsive img
let ActivePhoto = (props) => {
  return (
    <div className="active-photo">
      <div className="active-photo__heading-container">
        <Link to={`/search?query=${props.query}`}>
          <button className="active-photo__heading-container__close">
            &#10005;
          </button>
        </Link>
      </div>
      <div className="active-photo__img-container">
        <a href={props.activePhoto.imgLink}>
          <figure>
            <img
              srcSet={`${props.activePhoto.imgTinyURL} 240w,
                       ${props.activePhoto.imgSmallURL} 320w,
                       ${props.activePhoto.imgMediumURL} 640w,
                       ${props.activePhoto.imgLargeURL} 800w`}
              sizes="(max-width: 340px) 240px,
                     (max-width: 660px) 320px,
                     (max-width: 820px) 640px,
                     800px"
              src={props.activePhoto.imgMediumURL}
              alt={props.activePhoto.title}
            />
            <figcaption>
              <h3>{props.activePhoto.title}</h3>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  )
}

ActivePhoto.propTypes = {
  activePhoto: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imgLink: PropTypes.string.isRequired,
    imgTinyURL: PropTypes.string.isRequired,
    imgSmallURL: PropTypes.string.isRequired,
    imgMediumURL: PropTypes.string.isRequired,
    imgLargeURL: PropTypes.string.isRequired
  }),
  query: PropTypes.string.isRequired
}

export { ActivePhoto }
