import React from 'react'

import Tabs from '../tabs'
import ItemList from '../item-list'
import Filter from '../filter'

import classes from './app.module.scss'

function App() {
  const elements = [
    { id: 1, price: 9000, company: 'S7' },
    { id: 2, price: 7000, company: 'Airlines' },
    { id: 3, price: 15000, company: 'Aeroflot' },
  ]

  return (
    <div className={classes.container}>
      <div>
        <img className={classes.logo} src="../images/logo.svg" alt="Logo" />
      </div>
      <div className={classes['container-content']}>
        <Filter />
        <div className={classes.content}>
          <Tabs />
          <ItemList elements={elements} />
        </div>
      </div>
    </div>
  )
}

export default App
