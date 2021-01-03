import React from 'react'

import classes from './Logo.module.css'
import modernMilkmanLogo from '../../assets/images/MMLogo.svg'

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={modernMilkmanLogo} alt="milkman-logo" />
    </div>
  )
}

export default Logo
