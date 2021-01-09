import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/products'
import ContainerLayout from '../ContainerLayout/ContainerLayout'

const Home = (props) => {
  useEffect(() => {
    props.loadProducts()
  }, [])

  return <ContainerLayout heading="Welcome"></ContainerLayout>
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLoading: () => dispatch(actions.setProductsLoading),
    loadProducts: () => dispatch(actions.loadProducts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
