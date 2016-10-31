// Header.js
import React from 'react';
import { SearchFormContainer } from '../containers/SearchFormContainer';

function Header() {
  return (
    <header className="main-header">
      <h1 className="main-header__heading">Flickr Search</h1>
      <SearchFormContainer />
    </header>
  );
}

export { Header };
