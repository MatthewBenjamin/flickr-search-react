// Header.js
import React from 'react'
import { SearchFormContainer } from '../containers/SearchFormContainer'

let Header =  React.createClass({
  render: function() {
    return (
      <header className="main-header">
        <h1 className="main-header__heading">Flickr Search</h1>
        <SearchFormContainer />
      </header>
    )
  }
});

export { Header }
