import PropTypes from 'prop-types'
import React from 'react'
import classes from './ProductListItem.module.css'

const ProductListItem = (props) => {
  return (
    <div className={classes.ProductListItem}>
      <img src={`./images/${props.productDetails.key}.jpg`} height="190" width="auto" alt="milk" />
      <div className={classes.ProductTitle}>{props.productDetails.title}</div>
      <div className={classes.ProductPrice}>
        £{props.productDetails.price.toFixed(2)} {props.productDetails.amount}
      </div>
    </div>
  )
}

ProductListItem.propTypes = {
  productDetails: PropTypes.object.isRequired,
}

export default ProductListItem
