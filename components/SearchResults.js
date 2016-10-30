// Search.js
import React from 'react'
import { PhotoInfo } from './PhotoInfo'
import { ActivePhoto } from './ActivePhoto'
import { Loading } from './Loading'

const PropTypes = React.PropTypes;

let SearchResults = (props) => {
  let PhotoResults = props.photoResults.map(function(result, resultIndex) {
    let activeLinkURL = `/search?query=${props.query}&active_link=${resultIndex}`
    return (
      <PhotoInfo
        title={result.title}
        imgThumbnailURL={result.imgThumbnailURL}
        key={result.id}
        activeLink={activeLinkURL} />
    )
  });

  return props.isLoading === true
  ? <Loading queryTerm={props.query} />
  : <div>
      <h2>got results for "{props.query}"</h2>
      <ul className='results-list'>{ PhotoResults }</ul>
      { props.activePhoto &&
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
  activePhoto: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    imgLink: PropTypes.string,
    imgTinyURL: PropTypes.string,
    imgSmallURL: PropTypes.string,
    imgMediumURL: PropTypes.string,
    imgLargeURL: PropTypes.string
  })
};

export { SearchResults }
