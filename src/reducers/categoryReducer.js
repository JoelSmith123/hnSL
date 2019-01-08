export const categoryReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      console.log(action.category) 
      return action.category
    default: 
      return state
  }
}