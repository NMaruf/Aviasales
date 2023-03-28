const initialState = {
  tabs: [
    { id: 'cheap', label: 'самый дешевый', isActive: true },
    { id: 'fast', label: 'самый быстрый', isActive: false },
    { id: 'optimal', label: 'оптимальный', isActive: false },
  ],
}

// eslint-disable-next-line default-param-last
const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TABS_TOGGLE':
      const newTabs = state.tabs.map((tab) => {
        if (tab.id === action.id) {
          return { ...tab, isActive: true }
        }
        return { ...tab, isActive: false }
      })
      return { tabs: newTabs }
    default:
      return state
  }
}

export default tabReducer
