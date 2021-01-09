import React from 'react'
import PropTypes from 'prop-types'
import classes from './CategoryList.module.css'
import CategoryListItem from '../CategoryListItem/CategoryListItem'

const CategoryList = (props) => {
  const listItemClicked = (id) => {
    console.log(id)
  }

  return (
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
  )
}

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
}

export default CategoryList
