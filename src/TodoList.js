import React, { Component } from 'react'
import 'antd/dist/antd.css';
import store from './store/index'
import { getInputChangeValue, getAddTodoItem, getDeleteTodoItem, getTodoItem} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    console.log('this.state');
    console.log(this.state);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      ></TodoListUI>
    )
  }
  componentDidMount() {
    const action = getTodoItem()
    store.dispatch(action)
  }
  handleInputChange(e) {
    const value = e.target.value
    const action = getInputChangeValue(value)
   store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddTodoItem()
    store.dispatch(action)
  }
  handleDeleteItem(index) {
    const action = getDeleteTodoItem(index)
    store.dispatch(action)
  }
}

export default TodoList