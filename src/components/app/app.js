import React from 'react'

import Tabs from '../tabs'
import ItemList from '../item-list'
import Filter from '../filter'

import classes from './app.module.scss'

function App() {
  return (
    <div className={classes.container}>
      <div>
        <img className={classes.logo} src="../images/logo.svg" alt="Logo" />
      </div>
      <div className={classes['container-content']}>
        <Filter />
        <div className={classes.content}>
          <Tabs />
          <ItemList />
        </div>
      </div>
    </div>
  )
}

export default App
