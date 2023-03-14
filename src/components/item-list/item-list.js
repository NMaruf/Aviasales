import React from 'react'

import Item from '../item/item'

import classes from './item-list.module.scss'

export default function ItemList({ elements }) {
  const results = elements.map((ticket) => {
    const { id, price } = ticket

    return <Item key={id} id={id} price={price} />
  })

  const content = (
    <>
      {results}
      <button type="button" className={classes.more}>
        Показать ещё 5 билетов!
      </button>
    </>
  )
  return <ul className={classes.tickets}>{content}</ul>
}
