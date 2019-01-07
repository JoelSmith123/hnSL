export const isLoading = (check) => ({
  type: 'IS_LOADING',
  isLoading: check
})

export const hasErrored = (check) => ({
  type: 'HAS_ERRORED',
  hasErrored: check
})

export const fetchDataSuccess = (suggestions) => ({
  type: 'FETCH_DATA_SUCCESS',
  suggestions
})

export const filterValues = (filterInput1, filterInput2) => ({
  type: 'FILTER_VALUES',
  filterInput1,
  filterInput2
})