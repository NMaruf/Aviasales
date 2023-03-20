export const onFilterChange = (filterId, filters) => {
  const type = filterId === 1 ? 'SHOW_ALL' : 'SHOW_CURRENT'
  return {
    type,
    filterId,
    filters,
  }
}

export const tabsToggle = (id) => ({ type: 'TABS_TOGGLE', id })
