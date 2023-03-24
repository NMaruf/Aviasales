import { combineReducers } from 'redux'

import filterReducer from './filterReducer'
import tabReducer from './tabReducer'
import ticketsReducer from './ticketsReducer'

export default combineReducers({ filters: filterReducer, tabs: tabReducer, tickets: ticketsReducer })
