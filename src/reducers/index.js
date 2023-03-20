import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import tabReducer from './tabReducer'

export default combineReducers({ filtersData: filterReducer, tabs: tabReducer })
