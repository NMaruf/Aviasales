const initialState = { tickets: [], loading: true, error: null }

// eslint-disable-next-line default-param-last
const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TICKETS_REQUEST':
      return {
        tickets: [...state.tickets],
        loading: true,
        error: null,
      }
    case 'TICKETS_SUCCESS':
      const arr = [...state.tickets]
      return {
        tickets: arr.concat(action.tickets),
        loading: false,
        error: null,
      }
    case 'TICKETS_ERROR':
      return {
        tickets: [...state.tickets],
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export default ticketsReducer
