import * as actionTypes from './actionTypes'

import axios from '../../data/axios-products'

export const setProductsLoading = () => {
  return {
    type: actionTypes.LOADING_PRODUCTS,
  }
}

export const updateProducts = (products) => {
  return {
    type: actionTypes.UPDATE_PRODUCTS,
    payload: {
      products: products,
    },
  }
}

export const loadProducts = () => {
  return (dispatch) => {
    dispatch(setProductsLoading())
    axios
      .get('/categoryProducts')
      .then((response) => {
        dispatch(updateProducts(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const selectProductCategory = (category) => {
  return {
    type: actionTypes.SELECT_PRODUCT_CATEGORY,
    payload: { category: category },
  }
}
