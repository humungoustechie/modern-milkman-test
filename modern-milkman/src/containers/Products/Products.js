import * as actions from '../../store/actions/products'

import CategoryList from '../../components/Products/CategoryList/CategoryList'
import ContainerLayout from '../ContainerLayout/ContainerLayout'
import ProductList from '../../components/Products/ProductList/ProductList'
import React from 'react'
import classes from './Products.module.css'
import { connect } from 'react-redux'
import { useEffect } from 'react'

const Products = (props) => {
  useEffect(() => {
    props.loadProducts()
  }, [])

  return (
    <ContainerLayout heading="Our Products">
      <CategoryList className={classes.CategoryList} />
      <ProductList className={classes.ProductList} />
    </ContainerLayout>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch(actions.setProductsLoading),
    loadProducts: () => dispatch(actions.loadProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
