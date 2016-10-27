// routes.js
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Main } from '../components/Main'
import { SearchResultsContainer } from '../containers/SearchResultsContainer'
import { Home } from '../components/Home'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='search' component={SearchResultsContainer} />
    </Route>
  </Router>
)

export { routes }
