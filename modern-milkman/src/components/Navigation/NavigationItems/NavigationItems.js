import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        Home
      </NavigationItem>
      <NavigationItem link="/products" exact>
        Products
      </NavigationItem>
    </ul>
  )
}

export default NavigationItems
