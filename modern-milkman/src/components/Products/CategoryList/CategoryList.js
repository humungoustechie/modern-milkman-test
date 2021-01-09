import * as actions from '../../../store/actions/products'

import CategoryListItem from '../CategoryListItem/CategoryListItem'
import React from 'react'
import classes from './CategoryList.module.css'
import { connect } from 'react-redux'

const CategoryList = (props) => {
  const listItemClicked = (id) => {
    console.log(id)
    props.selectCategory(id)
  }

  return (
    <div className={props.className}>
      <ul className={classes.NavLinks}>
        {props.categories.map((category) => {
          return (
            <CategoryListItem
              key={category}
              category={category}
              listItemClick={listItemClicked}
              active={category === props.selectedCategory}
            />
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => dispatch(actions.selectProductCategory(category)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
