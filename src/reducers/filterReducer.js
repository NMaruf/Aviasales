const initialState = {
  filters: [
    { id: 1, filterName: 'Все', active: true },
    { id: 2, filterName: 'Без пересадок', active: true },
    { id: 3, filterName: '1 пересадка', active: true },
    { id: 4, filterName: '2 пересадки', active: true },
    { id: 5, filterName: '3 пересадки', active: true },
  ],
  filterInitialized: true,
}

// eslint-disable-next-line default-param-last
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_ALL':
      const isActive = state.filters[0].active
      const newArr = [...state.filters]

      return {
        filters: newArr.map((filter) => {
          // eslint-disable-next-line no-param-reassign
          filter.active = !isActive
          return filter
        }),
        filterInitialized: false,
      }
    case 'SHOW_CURRENT':
      let isAllActive = true

      const remainingFilters = state.filters.slice(1).map((filter) => {
        if (filter.id === action.filterId) {
          // eslint-disable-next-line no-param-reassign
          filter.active = !filter.active
        }
        if (filter.active !== true) {
          isAllActive = false
        }
        return filter
      })
      return {
        filters: [{ ...state.filters[0], active: isAllActive }, ...remainingFilters],
        filterInitialized: true,
      }
    default:
      return state
  }
}

export default filterReducer
