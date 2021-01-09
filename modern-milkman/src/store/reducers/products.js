import * as actionTypes from '../actions/actionTypes'

const initialState = {
  products: [],
  loading: false,
  categories: [],
  selectedCategory: 'Milkshakes',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_PRODUCTS: {
      return { ...state, loading: true }
    }
    case actionTypes.UPDATE_PRODUCTS: {
      const categories = action.payload.products.map((product) => {
        return product.title
      })

      return { ...state, loading: false, products: action.payload.products, categories: categories }
    }
    default: {
      return state
    }
  }
}

export default reducer
