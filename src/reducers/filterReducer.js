export const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filterInputs
    default:
      return state
  }
}