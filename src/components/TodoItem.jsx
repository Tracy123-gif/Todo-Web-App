import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'
const TodoItem = ({todo}) => {

    
  return (
    <div style={{ backgroundColor: todo.color }} className='min-h-24 overflow-hidden w-full p-5  mb-5 rounded-2xl h-20 drop-shadow-lg'>
     <p> {todo.name}</p>
     <p> {todo.detail}</p>
     </div>
  )
}

export default TodoItem
