import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router'

import reducers from './reducers'
import { All, One, Compare, Graphics } from './containers/'

const history = createHistory()
const routerMW = routerMiddleware(history)

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), applyMiddleware(thunk, routerMW))

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <HashRouter>
      <div>
        <Route exact path='/' component={All} />
        <Route path='/:pokeId' component={One} />
        <Route path='/compare' component={Compare} />
        <Route path='/graphics' component={Compare} />
      </div>
    </HashRouter>
  </ConnectedRouter>
</Provider>,
document.getElementById('app'))
