import Aux from '../Auxiliary/Auxiliary'
import NavBar from '../../components/NavBar/NavBar'
import React from 'react'
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
