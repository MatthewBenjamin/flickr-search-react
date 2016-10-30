// PhotoInfo.js
import React from 'react'
import { Link } from 'react-router'

const PropTypes = React.PropTypes;

let PhotoInfo = (props) => {
  // TODO: add <img> alt-text
  return (
    <li
      className='results-list__item' >
      <Link to={props.activeLink}>
        <img
          className='results-list__item__img'
          src={props.imgThumbnailURL}
          alt={props.title} />
      </Link>
    </li>
  )
}

PhotoInfo.propTypes = {
  imgThumbnailURL: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export { PhotoInfo }
