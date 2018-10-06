import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from "./actionTypes"

export const getInputValue = (value)=>{
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
}

export const addTodoItem = ()=>{
  return {
    type: ADD_TODO_ITEM
  }
}

export const deleteTodoItem = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index: index
  }
}