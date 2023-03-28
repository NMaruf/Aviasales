import AviasalesService from '../services/service'
import ServiceLocalstorage from '../services/service-localstorage'

const aviasalesService = new AviasalesService()
const localstorageService = new ServiceLocalstorage()

const SHOW_ALL = 'SHOW_ALL'
const SHOW_CURRENT = 'SHOW_CURRENT'
const TABS_TOGGLE = 'TABS_TOGGLE'
const TICKETS_REQUEST = 'TICKETS_REQUEST'
const TICKETS_SUCCESS = 'TICKETS_SUCCESS'
const TICKETS_ERROR = 'TICKETS_ERROR'

export const filterChange = (filterId, filters) => {
  const type = filterId === 1 ? SHOW_ALL : SHOW_CURRENT
  return {
    type,
    filterId,
    filters,
  }
}

export const tabsToggle = (id) => ({ type: TABS_TOGGLE, id })

export const ticketsRequested = () => ({ type: TICKETS_REQUEST })

export const ticketsLoaded = (tickets) => ({
  type: TICKETS_SUCCESS,
  tickets,
})

export const ticketsError = (error) => ({
  type: TICKETS_ERROR,
  error,
})

export const fetchTickets = () => () => (dispatch) => {
  const func = () => {
    dispatch(ticketsRequested())
    aviasalesService
      .getAllTickets()
      .then((res) => {
        dispatch(ticketsLoaded(res.tickets))
        if (res.stop === false) {
          func()
        } else {
          console.log('Received: ', res.stop)
          localstorageService.clear()
        }
      })
      .catch((err) => {
        if (Number(err.message) === 500) {
          return func()
        }
        return dispatch(ticketsError(err))
      })
  }
  return func()
}
