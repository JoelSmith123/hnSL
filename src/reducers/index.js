import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer
})