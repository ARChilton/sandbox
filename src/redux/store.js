/* eslint-disable */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
// import thunkMiddleware from 'redux-thunk'
// import {fromJS} from 'immutable'
import createReducer from './reducers'

/**
 * Creates the store
 * @param {object} initialState 
 * @param {object} history 
 */
export default function configureStore(initialState = {}, history) {
  const middleware = applyMiddleware(
    // Middleware execution order is top-to-bottom
    routerMiddleware(history),
    // thunkMiddleware,
  )

  let store
  if (typeof window === 'undefined') {
    store = createStore(createReducer(), middleware)
  } else {
    let composeEnhancers = compose
    if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
    store = createStore(createReducer(), initialState, composeEnhancers(middleware))
  }

  // Make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default())
    })
  }

  return store
}
