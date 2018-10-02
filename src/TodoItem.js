import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return (
      <li
        onClick={this.handleClick}
      >
        {this.props.item}
      </li>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  item: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

export default TodoItem