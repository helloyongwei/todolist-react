import React from 'react'
import { connect } from 'react-redux'
import { getInputValue, addTodoItem, deleteTodoItem } from "./store/actionCreators";

const TodoList = (props) => {
  const { inputValue, changeInputValue, handleClick, handleDeleteItem } = props
  return (
      <div>
        <div>
          <input value={inputValue} onChange={changeInputValue}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            props.list.map((item, index)=>{
              return (
                <li key={index} onClick={()=>{
                  handleDeleteItem(index)
                }}>{item}</li>
              )
            })
          }
        </ul>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getInputValue(e.target.value)
      dispatch(action)
    },
    handleClick() {
      const action = addTodoItem()
      dispatch(action)
    },
    handleDeleteItem(index){
      const action = deleteTodoItem(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)