import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Spin, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { bindActionCreators } from 'redux'

import Item from '../item/item'
import { fetchTickets } from '../../actions/actions'

import classes from './item-list.module.scss'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

// eslint-disable-next-line no-shadow
function ItemList({ tickets, loading, error, fetchTickets, tabs, filters }) {
  const [count, setCount] = useState(5)

  useEffect(() => {
    fetchTickets()
  }, [])

  let id = 1
  const optimal = [...tickets]
  let sortedTickets
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].id === 'cheap' && tabs[i].isActive === true) {
      sortedTickets = tickets.sort((prev, next) => prev.price - next.price)
    } else if (tabs[i].id === 'fast' && tabs[i].isActive === true) {
      sortedTickets = tickets.sort((prev, next) => {
        const first = prev.segments[0].duration + prev.segments[1].duration
        const second = next.segments[0].duration + next.segments[1].duration
        return first - second
      })
    } else if (tabs[i].id === 'optimal' && tabs[i].isActive === true) {
      sortedTickets = optimal
    }
  }

  const activeFilters = filters.filter((filter) => filter.active)
  const stopsCount = {
    0: 'Без пересадок',
    1: '1 пересадка',
    2: '2 пересадки',
    3: '3 пересадки',
  }
  const filteredTickets = sortedTickets.filter((ticket) => {
    const { segments } = ticket
    const segmentsStops = segments.every((segment) => {
      const stopsTypeName = stopsCount[segment.stops.length]
      if (activeFilters.map((filter) => filter.filterName).includes(stopsTypeName)) {
        return true
      }
      return false
    })
    return segmentsStops
  })

  const results = filteredTickets.slice(0, count).map((ticket) => {
    id++
    const { price, carrier, segments } = ticket

    return <Item key={id} id={id} price={price} carrier={carrier} segments={segments} />
  })

  const errorMess = error ? <Alert message="Error" description={`${error}`} type="error" showIcon /> : null
  /* eslint-disable */
  const alert =
    activeFilters.length > 0 ? null : (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
    )
  const spinner = loading && !errorMess && !alert ? <Spin indicator={antIcon} className={classes.spinner} /> : null
  const moreBtn =
    errorMess || alert ? null : (
      <button type="button" className={classes.more} onClick={() => setCount(count + 5)}>
        Показать ещё 5 билетов!
      </button>
    )
  /* eslint-disable */

  const content = (
    <>
      {alert}
      {spinner}
      {errorMess}
      {results}
      {moreBtn}
    </>
  )
  return <ul className={classes.tickets}>{content}</ul>
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets.tickets,
    loading: state.tickets.loading,
    error: state.tickets.error,
    tabs: state.tabs.tabs,
    filters: state.filters.filters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      fetchTickets: fetchTickets(),
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
