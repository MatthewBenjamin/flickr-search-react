// SearchResultsContainer.js
import React from 'react'
import { SearchResults } from '../components/SearchResults.js'
import { flickrHelpers } from '../utils/flickrHelpers'

const SearchResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      metaData: {},
      photoResults: []
    }
  },
  componentDidMount: function () {
    let query = this.props.location.query.query;
    flickrHelpers.performSearch(query)
      .then(function(flickrResults) {
        this.setState({
            isLoading: false,
            metaData: flickrResults.metaData,
            photoResults: flickrResults.photoResults
        });
      }.bind(this));
  },
  componentDidUpdate: function (prevProps) {
    // TODO: refactor - not DRY, see nearly same as componentDidMount
    if (this.props !== prevProps) {
      let query = this.props.location.query.query;
      flickrHelpers.performSearch(query)
        .then(function (flickrResults) {
          this.setState({
            isLoading: false,
            metaData: flickrResults.metaData,
            photoResults: flickrResults.photoResults
          });
        }.bind(this));
    }
  },
  render: function () {
    return (
      <SearchResults
        isLoading={this.state.isLoading}
        query={this.props.location.query.query}
        metaData={this.state.metaData}
        photoResults={this.state.photoResults} />
    )
  }
});

export { SearchResultsContainer }
