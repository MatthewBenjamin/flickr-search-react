// Search.js
import React from 'react'
import { PhotoInfo } from '../components/PhotoInfo'

const PropTypes = React.PropTypes;

let SearchResults = (props) => {
  let PhotoResults = props.photoResults.map(function(result) {
    return (
      <PhotoInfo
        title={result.title}
        imgURL={result.imgURL}
        key={result.id} />
    )
  });

  return props.isLoading === true
  ? <div><h2>Loading results for "{props.query}"</h2></div>
  : <div>
      <h2>got results for "{props.query}"</h2>
      <ul className='results-list'>{ PhotoResults }</ul>
    </div>

}

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  photoResults: PropTypes.array.isRequired,
  metaData: PropTypes.shape({
    page: PropTypes.number,
    pages: PropTypes.number,
    perpage: PropTypes.number,
    total: PropTypes.string
  }),
  query: PropTypes.string.isRequired
};

export { SearchResults }
