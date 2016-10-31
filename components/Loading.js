// Loading.js
import React from 'react';

const PropTypes = React.PropTypes;

function Loading(props) {
  return (
    <div>
      <h2>Loading results for {props.queryTerm}</h2>
    </div>
  );
}

Loading.propTypes = {
  queryTerm: PropTypes.string.isRequired,
};

export { Loading };
