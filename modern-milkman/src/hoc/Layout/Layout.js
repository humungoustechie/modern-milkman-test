import React from 'react'

import NavBar from '../../components/NavBar/NavBar'
import Aux from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'

const Layout = (props) => {
  return (
    <Aux>
      <NavBar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  )
}

export default Layout
