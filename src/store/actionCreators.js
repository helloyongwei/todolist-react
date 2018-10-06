import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'
import axios from 'axios'


export const getInputChangeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoItem = () => {
  return (dispatch)=>{
    axios.get('list.json').then((res)=>{
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    }, (err)=>{
      console.log(err);
    })
  }
}