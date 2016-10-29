// SearchFormContainer.js
import React from 'react'
import { SearchForm } from '../components/SearchForm'

const SearchFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      query: ''
    }
  },
  handleUpdateQuery: function (e) {
    this.setState({
      query: e.target.value
    });
  },
  handleSubmitQuery: function (e) {
    e.preventDefault();
    var queryTerm = this.state.query.trim();
    if (queryTerm) {
      this.context.router.push({
        pathname: '/search',
        query: {
          // TODO: rename query, too many
          query: queryTerm
        }
      });
    }
  },
  render: function () {
    return (
      <SearchForm
        onUpdateQuery = {this.handleUpdateQuery}
        onSubmitQuery = {this.handleSubmitQuery}
        query = {this.state.query} />
    )
  }
});

export { SearchFormContainer }
