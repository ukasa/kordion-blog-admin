import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cruds from './cruds'

export default (history) => combineReducers({
  router: connectRouter(history),
  cruds,
})
