import './index.css'

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'

import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer as routing } from 'react-router-redux'

import Pokdex from './pokedex/pokedex-container'
import pokedex from './pokedex/pokedex-reducer'

let store = createStore(combineReducers({
  routing,
  pokedex
}))

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} >
      <Route path='/' component={Pokdex} />
    </Router>
  </Provider>,
  document.getElementById('root')
)