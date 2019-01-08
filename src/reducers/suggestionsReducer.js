export const suggestionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS':
      return Object.assign({}, state, {
        suggestions: action.suggestions
      })
    default:
      return state
  }
}