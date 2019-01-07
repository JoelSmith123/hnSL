export const filterSuggestionsValues = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_VALUES':
      return action.filterInput1
    default:
      return state
  }
}