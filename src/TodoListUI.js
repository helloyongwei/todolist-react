import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
      <div>
        <Input
          value={props.inputValue}
          onChange={props.handleInputChange}
          style={{width: '300px', marginRight: '10px'}}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >
          提交
        </Button>
      </div>
      <List
        style={{width: '300px', marginTop: '10px'}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={()=>{props.handleDeleteItem(index)}}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}


export default TodoListUI