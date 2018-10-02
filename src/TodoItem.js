import React, { Component } from 'react'

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

export default TodoItem