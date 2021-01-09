import * as actionTypes from '../actions/actionTypes'

const initialState = {
  products: [],
  loading: false,
  categories: [],
  selectedCategory: '',
  selectedCategoryData: [],
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
    case actionTypes.SELECT_PRODUCT_CATEGORY: {
      const selectedCategory = state.products.find((product) => product.title === action.payload.category)
      console.log(selectedCategory)
      return { ...state, selectedCategory: action.payload.category, selectedCategoryData: selectedCategory.data }
    }
    default: {
      return state
    }
  }
}

export default reducer
