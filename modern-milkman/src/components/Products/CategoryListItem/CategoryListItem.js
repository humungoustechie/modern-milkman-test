import React from 'react'
import PropTypes from 'prop-types'
import classes from './CategoryListItem.module.css'

const CategoryListItem = (props) => {
  const classNames = [classes.listItem]
  if (props.active) {
    classNames.push(classes.active)
  }

  return (
    <li className={classNames.join(' ')} onClick={() => props.listItemClick(2)}>
      {props.category}
    </li>
  )
}

CategoryListItem.propTypes = {
  category: PropTypes.object.isRequired,
  active: PropTypes.bool,
  listItemClick: PropTypes.func.isRequired,
}

export default CategoryListItem
