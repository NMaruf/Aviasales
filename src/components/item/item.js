import React from 'react'

import classes from './item.module.scss'

export default function Item({ id, price }) {
  return (
    <li className={classes.ticket} key={id}>
      <header className={classes.header}>
        <p className={classes.price}>{price} P</p>
        <img src="../images/company-logo.svg" alt="company-logo" />
      </header>
      <div className={classes.way}>
        <div className={classes.route}>
          <p className={classes.text}>MOS-HKT</p>
          <p className={classes.time}>10:45 - 08:00</p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>В пути</p>
          <p className={classes.time}>21ч 15м</p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>2 пересадки</p>
          <p className={classes.stops}>HKG, JNB</p>
        </div>
      </div>
      <div className={classes.way}>
        <div className={classes.route}>
          <p className={classes.text}>MOS-HKT</p>
          <p className={classes.time}>11:20 - 00:50</p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>В пути</p>
          <p className={classes.time}>13ч 30м</p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>1 пересадка</p>
          <p className={classes.stops}>HKG</p>
        </div>
      </div>
    </li>
  )
}
