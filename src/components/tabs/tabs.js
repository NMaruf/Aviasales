import React from 'react'

import classes from './tabs.module.scss'

function Tabs() {
  return (
    <div className={classes.tabs}>
      <button type="button" className={classes.btn}>
        самый дешёвый
      </button>
      <button type="button" className={classes.btn}>
        самый быстрый
      </button>
      <button type="button" className={classes.btn}>
        оптимальный
      </button>
    </div>
  )
}

export default Tabs
