// Search.js
import React from 'react'
import { PhotoInfo } from '../components/PhotoInfo'
import { ActivePhoto } from '../components/ActivePhoto'

const PropTypes = React.PropTypes;

let SearchResults = (props) => {
  let PhotoResults = props.photoResults.map(function(result) {
    let activeLinkURL = `/search?query=${props.query}&active_link=${result.id}`
    return (
      <PhotoInfo
        title={result.title}
        imgThumbnailURL={result.imgThumbnailURL}
        key={result.id}
        activeLink={activeLinkURL} />
    )
  });

  return props.isLoading === true
  ? <div><h2>Loading results for "{props.query}"</h2></div>
  : <div>
      <h2>got results for "{props.query}"</h2>
      <ul className='results-list'>{ PhotoResults }</ul>
      { props.activePhoto && props.activePhoto.id &&
        <ActivePhoto
          activePhoto={props.activePhoto}
          query={props.query} /> }
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
  query: PropTypes.string.isRequired,
  // TODO: same proptypes in activephoto component - DRY?
  activePhoto: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    imgLink: PropTypes.string,
    imgURL: PropTypes.string
  })
};

export { SearchResults }
