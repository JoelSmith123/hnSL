import { combineReducers } from 'redux'
import { isLoadingReducer } from './isLoadingReducer.js'
import { hasErroredReducer } from './hasErroredReducer.js'
import { filterReducer as filters } from './filterReducer.js'

export const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  hasErrored: hasErroredReducer,
  filters
})