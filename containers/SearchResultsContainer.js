// SearchResultsContainer.js
import React from 'react'
import { SearchResults } from '../components/SearchResults.js'
import { flickrHelpers } from '../utils/flickrHelpers'

const SearchResultsContainer = React.createClass({
  componentDidMount: function () {
    let query = this.props.location.query.query;
    flickrHelpers.performSearch(query)
      .then(function(flickrResults) {
        console.log(flickrResults);
        this.setState({
          flickrResults: flickrResults
        });
      }.bind(this));
  },
  componentDidUpdate: function (prevProps) {
    if (this.props !== prevProps) {
      let query = this.props.location.query.query;
      flickrHelpers.performSearch(query)
        .then(function (flickrResults) {
          console.log(flickrResults);
          this.setState({
            flickrResults: flickrResults
          });
        }.bind(this));
    }
  },
  render: function () {
    return <SearchResults query={this.props.location.query.query} />
  }
});

export { SearchResultsContainer }
