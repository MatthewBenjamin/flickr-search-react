// ActivePhotoHeader.js
import React from 'react';
import { Link } from 'react-router';

const PropTypes = React.PropTypes;

function ActivePhotoHeader(props) {
  return (
    <div className="active-photo__heading-container">
      <Link to={`/search?query=${props.query}`}>
        <button className="active-photo__heading-container__close">
          &#10005;
        </button>
      </Link>
    </div>
  );
}

ActivePhotoHeader.propTypes = {
  query: PropTypes.string.isRequired,
};

export { ActivePhotoHeader };
