import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state= {
      inputValue:'',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
     <Fragment>
       <div>
         <input
           type="text"
           value={this.state.inputValue}
           onChange={this.handleInputChange}
         />
         <button onClick={this.handleBtnClick}>提交</button>
       </div>
       <ul>
         {this.getTodoItem()}
       </ul>
     </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
        return (
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteItem={this.handleItemDelete}
          ></TodoItem>
        )
      })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(()=> {
      return {
        inputValue: value
      }
    })
  }
  handleBtnClick() {
    this.setState((prevState)=> {
      return {
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }
    })
  }
  handleItemDelete(index) {
    this.setState((prevState)=>{
      const list = prevState.list
      list.splice(index, 1)
      return { list }
    })
  }
}

export default TodoList