export const suggestionsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.suggestions
    default:
      return state
  }
}