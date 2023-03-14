import React from 'react'

import classes from './filter.module.scss'

export default function Filter() {
  return (
    <div className={classes.filter}>
      <header>Количество пересадок</header>
      <div className={classes.checkbox__wrapper}>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="All">
            <input className={classes.check__input} type="checkbox" id="All" name="All" />
            <span className={classes.check__box} />
            Все
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="Not">
            <input className={classes.check__input} type="checkbox" id="Not" name="Not" />
            <span className={classes.check__box} />
            Без пересадок
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="1">
            <input className={classes.check__input} type="checkbox" id="1" name="1" />
            <span className={classes.check__box} />1 пересадка
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="2">
            <input className={classes.check__input} type="checkbox" id="2" name="2" />
            <span className={classes.check__box} />2 пересадки
          </label>
        </div>
        <div className={classes.item}>
          <label className={classes.check} htmlFor="3">
            <input className={classes.check__input} type="checkbox" id="3" name="3" />
            <span className={classes.check__box} />3 пересадки
          </label>
        </div>
      </div>
    </div>
  )
}
