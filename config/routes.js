// routes.js
import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Main } from '../components/Main'
import { Search } from '../components/Search'
import { Home } from '../components/Home'

let routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='search' component={Search} />
    </Route>
  </Router>
)

export { routes }
