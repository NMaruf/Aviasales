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
      /* eslint-disable */
      const newTabs = state.tabs.map((tab) => {
        return tab.id === action.id ? { ...tab, isActive: true } : { ...tab, isActive: false }
      }) /* eslint-disable */
      return { tabs: newTabs }
    default:
      return state
  }
}

export default tabReducer
