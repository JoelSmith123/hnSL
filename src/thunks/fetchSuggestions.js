import { isLoading, hasErrored, fetchDataSuccess } from '../actions/index.js'

export const fetchSuggestions = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      dispatch(isLoading(false))
      const suggestions = await response.json()
      console.log(suggestions)
      dispatch(fetchDataSuccess(suggestions))
    } catch (error) {
      dispatch(hasErrored(true))
    }
  }
}
