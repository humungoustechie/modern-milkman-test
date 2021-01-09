import React from 'react'
import PropTypes from 'prop-types'

import classes from './ContainerLayout.module.css'
const ContainerLayout = (props) => {
  return (
    <div>
      <div className={classes.Header}>{props.heading}</div>
      <div>{props.children}</div>
    </div>
  )
}

ContainerLayout.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default ContainerLayout
