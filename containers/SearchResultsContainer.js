// SearchResultsContainer.js
import React from 'react'
import { SearchResults } from '../components/SearchResults.js'
import { flickrHelpers } from '../utils/flickrHelpers'

const SearchResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      metaData: {},
      photoResults: [],
      activePhoto: {},
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
    if (this.props.location.query.query !== prevProps.location.query.query) {
      let query = this.props.location.query.query;
      this.setState({
        isLoading: true
      });
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
  componentWillReceiveProps: function(nextProps) {
    if (this.props.location.query.active_link !==
        nextProps.location.query.active_link) {
      let activePhoto = (this.state.photoResults.find(function(photoItem) {
        return photoItem.id === nextProps.location.query.active_link;
      }));
      this.setState({
        activePhoto: activePhoto
      });
    }
  },
  render: function () {
    return (
      <SearchResults
        isLoading={this.state.isLoading}
        query={this.props.location.query.query}
        metaData={this.state.metaData}
        photoResults={this.state.photoResults}
        activePhoto={this.state.activePhoto} />
    )
  }
});

export { SearchResultsContainer }
