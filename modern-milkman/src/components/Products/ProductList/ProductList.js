import ProductListItem from '../ProductListItem/ProductListItem'
import React from 'react'
import classes from './ProductList.module.css'
import { connect } from 'react-redux'

const ProductList = (props) => {
  console.log(props.selectedCategoryData)
  let data = <h2>Please select a category</h2>
  if (props.selectedCategoryData.length > 0) {
    data = (
      <div className={classes.ProductListContainer}>
        {props.selectedCategoryData.map((product) => {
          return (
            <ProductListItem
              key={product.key}
              productDetails={product}
              className={classes.ProductItem}
            ></ProductListItem>
          )
        })}
      </div>
    )
  }

  return <div className={props.className}>{data}</div>
}

const mapStateToProps = (state) => {
  return {
    selectedCategoryData: state.selectedCategoryData,
  }
}

export default connect(mapStateToProps)(ProductList)
