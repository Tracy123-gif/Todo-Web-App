import React from 'react'
const TodoItem = ({todo}) => {
    
  return (
    <div className='w-full p-5 bg-gradient-to-br from-slate-500 to-blue-800 mb-5 rounded-2xl h-20 drop-shadow-lg'>
     <p> {todo.name}</p>
     <p> {todo.detail}</p>
     </div>
  )
}

export default TodoItem
