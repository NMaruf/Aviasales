import React from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'

import { tabsToggle } from '../../actions/actions'

import classes from './tabs.module.scss'

function Tabs({ tabs, onTabsToggle }) {
  const buttons = tabs.map(({ id, label, isActive }) => {
    const classBtn = cn(classes.btn, { [classes.active]: isActive === true })
    return (
      <button type="button" key={id} onClick={() => onTabsToggle(id)} className={classBtn}>
        {label}
      </button>
    )
  })

  return <div className={classes.tabs}>{buttons}</div>
}

const mapStateToProps = (state) => ({ tabs: state.tabs.tabs })

const mapDispatchToProps = (dispatch) => ({ onTabsToggle: (id) => dispatch(tabsToggle(id)) })

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
