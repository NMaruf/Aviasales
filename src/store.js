import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './reducers/index'

// prettier-ignore
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

// prettier-ignore
const loggerMiddleware = ({ getState }) => (next) => (action) => {
  console.log('Action:', action.type, ' State:', getState())
  return next(action)
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, thunk)))

export default store
