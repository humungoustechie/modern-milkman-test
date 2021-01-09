import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/images/MMLogo.svg'

const NavBar = () => {
  return (
    <header className={classes.NavBar}>
      <img className={classes.logo} src={logo} alt="logo" />
      <nav>
        <ul className={classes.navlinks}>
          <li>
            <a href="/products">Our Products</a>
          </li>
          <li>
            <a href="/how">How it works</a>
          </li>
          <li>
            <a href="/suppliers">Our suppliers</a>
          </li>
          <li>
            <a href="/story">Our story</a>
          </li>
          <li>
            <a href="/help">Help</a>
          </li>
        </ul>
      </nav>
      <nav>
        <a className={classes.cta} href="/signin">
          <button className={classes.signin}>Sign In</button>
        </a>
        <a className={classes.cta} href="/started">
          <button className={classes.started}>Get Started</button>
        </a>
      </nav>
    </header>
  )
}

export default NavBar
