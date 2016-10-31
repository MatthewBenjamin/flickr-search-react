// SearchResultsContainer.js
import React from 'react';
import { SearchResults } from '../components/SearchResults';
import { flickrHelpers } from '../utils/flickrHelpers';

const SearchResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      metaData: {},
      photoResults: [],
      activePhoto: null,
    };
  },
  componentDidMount() {
    // send API request on load
    let query = this.props.location.query.query;
    let activePhotoIndex = parseInt(this.props.location.query.active_link);
    this.handleFlickrSearch(query, activePhotoIndex);
  },
  componentWillReceiveProps(nextProps) {
    if (this.props.location.query !== nextProps.location.query) {
      // new query term - send API request
      let query = nextProps.location.query.query;
      let activePhotoIndex = parseInt(nextProps.location.query.active_link);
      if (this.props.location.query.query !== query) {
        this.setState({
          isLoading: true,
        });
        this.handleFlickrSearch(query, activePhotoIndex);
      }
      // update activePhoto
      if (this.props.location.query.active_link !== activePhotoIndex) {
        this.handleActivePhotoSelection(activePhotoIndex);
      }
    }
  },
  // submit flickr API request
  handleFlickrSearch(query, activePhotoIndex) {
    flickrHelpers.performSearch(query)
      .then(function (flickrResults) {
        this.setState({
          isLoading: false,
          metaData: flickrResults.metaData,
          photoResults: flickrResults.photoResults,
        });
      }.bind(this))
      .then(function () {
        // If page loaded w/ active_link param, set activePhoto
        this.handleActivePhotoSelection(activePhotoIndex);
      }.bind(this));
  },
  // set, clear activePhoto
  handleActivePhotoSelection(activePhotoIndex) {
    if (activePhotoIndex >= 0) {
      this.setState({
        activePhoto: this.state.photoResults[activePhotoIndex],
      });
    } else {
      this.setState({
        activePhoto: null,
      });
    }
  },
  render() {
    return (
      <SearchResults
        isLoading={this.state.isLoading}
        query={this.props.location.query.query}
        metaData={this.state.metaData}
        photoResults={this.state.photoResults}
        activePhoto={this.state.activePhoto}
      />
    );
  },
});

export { SearchResultsContainer };
