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
        filters: newArr.map((filter) => ({
          ...filter,
          active: !isActive,
        })),
        filterInitialized: false,
      }
    case 'SHOW_CURRENT':
      const arr = state.filters.slice(1)
      const idx = arr.findIndex((el) => el.id === action.filterId)
      const oldItem = arr[idx]
      const newItem = { ...oldItem, active: !oldItem.active }

      const remainingFilters = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]

      const isAllActive = remainingFilters.every((filter) => filter.active === true)

      return {
        filters: [{ ...state.filters[0], active: isAllActive }, ...remainingFilters],
        filterInitialized: true,
      }
    default:
      return state
  }
}

export default filterReducer
