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
        <img className='results-list__item__img' src={props.imgThumbnailURL} />
      </Link>
    </li>
  )
}

PhotoInfo.propTypes = {
  title: PropTypes.string.isRequired,
  imgThumbnailURL: PropTypes.string.isRequired,
  activeLink: PropTypes.string.isRequired,
}

export { PhotoInfo }
