export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filterInputs: action.filterInputs
      })
    default:
      return state
  }
}