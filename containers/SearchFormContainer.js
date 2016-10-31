// SearchFormContainer.js
import React from 'react';
import { SearchForm } from '../components/SearchForm';

const SearchFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },
  getInitialState() {
    return {
      query: '',
    };
  },
  handleUpdateQuery(e) {
    this.setState({
      query: e.target.value,
    });
  },
  handleSubmitQuery(e) {
    e.preventDefault();
    const queryTerm = this.state.query.trim();
    if (queryTerm) {
      this.context.router.push({
        pathname: '/search',
        query: {
          query: queryTerm,
        },
      });
    }
  },
  render() {
    return (
      <SearchForm
        onUpdateQuery={this.handleUpdateQuery}
        onSubmitQuery={this.handleSubmitQuery}
        query={this.state.query}
      />
    );
  },
});

export { SearchFormContainer };
