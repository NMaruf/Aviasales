import React from 'react'
import { add, format } from 'date-fns'

import classes from './item.module.scss'

function morph(n) {
  const textForms = ['пересадка', 'пересадки', 'пересадок']
  if (n > 1 && n < 5) {
    return textForms[1]
  }
  if (n === 1) {
    return textForms[0]
  }
  return textForms[2]
}

export default function Item({ price, carrier, segments }) {
  const date1 = format(add(new Date(segments[0].date), { minutes: segments[0].duration }), 'HH:mm')

  const date2 = format(add(new Date(segments[1].date), { minutes: segments[1].duration }), 'HH:mm')

  return (
    <li className={classes.ticket}>
      <header className={classes.header}>
        <p className={classes.price}>{price} P</p>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={`${carrier} logo`} />
      </header>
      <div className={classes.way}>
        <div className={classes.route}>
          <p className={classes.text}>
            {segments[0].origin}-{segments[0].destination}
          </p>
          <p className={classes.time}>
            {format(new Date(segments[0].date), 'HH:mm')} - {date1}
          </p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>В пути</p>
          <p className={classes.time}>
            {Math.floor(segments[0].duration / 60)}ч {Math.floor(segments[0].duration % 60)}м
          </p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>
            {segments[0].stops.length > 0 ? segments[0].stops.length : 'без'} {morph(segments[0].stops.length)}
          </p>
          <p className={classes.stops}>{segments[0].stops.join(', ')}</p>
        </div>
      </div>
      <div className={classes.way}>
        <div className={classes.route}>
          <p className={classes.text}>
            {segments[1].origin}-{segments[1].destination}
          </p>
          <p className={classes.time}>
            {' '}
            {format(new Date(segments[1].date), 'HH:mm')} - {date2}
          </p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>В пути</p>
          <p className={classes.time}>
            {Math.floor(segments[1].duration / 60)}ч {Math.floor(segments[1].duration % 60)}м
          </p>
        </div>
        <div className={classes.route}>
          <p className={classes.text}>
            {segments[1].stops.length > 0 ? segments[1].stops.length : 'без'} {morph(segments[1].stops.length)}
          </p>
          <p className={classes.stops}>{segments[1].stops.join(', ')}</p>
        </div>
      </div>
    </li>
  )
}
