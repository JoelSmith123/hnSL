export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filterInput1: action.filterInput1,
        filterInput2: action.filterInput2
      })
    default:
      return state
  }
}