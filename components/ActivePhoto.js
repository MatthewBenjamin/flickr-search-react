// ActivePhoto.js
import React from 'react'
import { Link } from 'react-router'

const PropTypes = React.PropTypes;

// TODO: responsive img
let ActivePhoto = (props) => {
  return (
    <div className="active-photo">
      <Link to={`/search?query=${props.query}`}>
        Close
      </Link>
      <h3>{props.activePhoto.title}</h3>
      <img src={props.activePhoto.imgURL} />
    </div>
  )
}

// TODO: same proptypes in SearchResults component - DRY?
ActivePhoto.propTypes = {
  activePhoto: PropTypes.shape({
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgLink: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired
  }),
  query: PropTypes.string.isRequired
}

export { ActivePhoto }
