import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions'

import classes from './filter.module.scss'

function Filter({ filtersData, onFilterChange }) {
  const { filters } = filtersData

  return (
    <div className={classes.filter}>
      <header>Количество пересадок</header>
      <div className={classes.checkbox__wrapper}>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="All">
            <input
              className={classes.check__input}
              type="checkbox"
              id="All"
              name="All"
              checked={filters[0].active}
              onChange={() => onFilterChange(filters[0].id, filters)}
            />
            <span className={classes.check__box} />
            {filters[0].filterName}
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="Not">
            <input
              className={classes.check__input}
              type="checkbox"
              id="Not"
              name="Not"
              checked={filters[1].active}
              onChange={() => onFilterChange(filters[1].id, filters)}
            />
            <span className={classes.check__box} />
            {filters[1].filterName}
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="1">
            <input
              className={classes.check__input}
              type="checkbox"
              id="1"
              name="1"
              checked={filters[2].active}
              onChange={() => onFilterChange(filters[2].id, filters)}
            />
            <span className={classes.check__box} />
            {filters[2].filterName}
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="2">
            <input
              className={classes.check__input}
              type="checkbox"
              id="2"
              name="2"
              checked={filters[3].active}
              onChange={() => onFilterChange(filters[3].id, filters)}
            />
            <span className={classes.check__box} />
            {filters[3].filterName}
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="3">
            <input
              className={classes.check__input}
              type="checkbox"
              id="3"
              name="3"
              checked={filters[4].active}
              onChange={() => onFilterChange(filters[4].id, filters)}
            />
            <span className={classes.check__box} />
            {filters[4].filterName}
          </label>
        </div>
      </div>
    </div>
  )
}

const mapStatetoProps = (state) => ({ ...state })

export default connect(mapStatetoProps, actions)(Filter)
