// SearchFormContainer.js
import React from 'react'
import { SearchForm } from '../components/SearchForm'

let SearchFormContainer = React.createClass({
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
    var queryTerm = this.state.query;
    this.context.router.push({
      pathname: '/search',
      query: {
        query: this.state.query
      }
    });
  },
  render: function () {
    return (
      <SearchForm
        onUpdateQuery = {this.handleUpdateQuery}
        onSubmitQuery = {this.handleSubmitQuery}
        query = {this.props.query} />
    )
  }
});

export { SearchFormContainer }
