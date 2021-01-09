import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import CategoryList from '../../components/Products/CategoryList/CategoryList'
import * as actions from '../../store/actions/products'
import ContainerLayout from '../ContainerLayout/ContainerLayout'
import classes from './Products.module.css'

const Products = (props) => {
  useEffect(() => {
    props.loadProducts()
  }, [])

  return (
    <ContainerLayout heading="Our Products">
      <div className={classes.Container}>
        <CategoryList categories={props.categories} selectedCategory={props.selectedCategory} />
      </div>
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
