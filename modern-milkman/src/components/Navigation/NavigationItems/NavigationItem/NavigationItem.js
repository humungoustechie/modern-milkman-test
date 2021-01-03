import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import classes from './NavigationItem.module.css'

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} exact to={props.link}>
        {props.children}
      </NavLink>
    </li>
  )
}

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
}

export default NavigationItem
