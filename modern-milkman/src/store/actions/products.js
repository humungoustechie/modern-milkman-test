import axios from '../../data/axios-products'
import * as actionTypes from './actionTypes'

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
