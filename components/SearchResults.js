// Search.js
import React from 'react';
import { PhotoList } from './PhotoList';
import { ActivePhoto } from './ActivePhoto';
import { Loading } from './Loading';

const PropTypes = React.PropTypes;

function SearchResults(props) {
  if (props.isLoading) {
    return <Loading queryTerm={props.query} />;
  }

  return (
    <div>
      <h2>got results for {props.query}</h2>

      <PhotoList
        photoResults={props.photoResults}
        query={props.query}
      />

      { // only display if there's an active photo
        props.activePhoto &&
        <ActivePhoto
          activePhoto={props.activePhoto}
          query={props.query}
        />
      }

    </div>
  );
}

SearchResults.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  photoResults: PropTypes.array.isRequired,
  metaData: PropTypes.shape({
    page: PropTypes.number,
    pages: PropTypes.number,
    perpage: PropTypes.number,
    total: PropTypes.string,
  }),
  query: PropTypes.string.isRequired,
  activePhoto: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    imgLink: PropTypes.string,
    imgTinyURL: PropTypes.string,
    imgSmallURL: PropTypes.string,
    imgMediumURL: PropTypes.string,
    imgLargeURL: PropTypes.string,
  }),
};

export { SearchResults };
