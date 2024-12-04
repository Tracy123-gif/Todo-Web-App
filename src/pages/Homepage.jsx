import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'
import AddTaskButton from '../components/AddTaskButton'
import TodoForm from '../components/TodoForm'
import DeleteAllButton from '../components/DeleteAllButton'
import { TodoContext } from '../contexts/TodoAppContext'

const Homepage = () => {

  const { todoData ,  isShowform, setIsShowform} = useContext(TodoContext)


  return (
    <div className='w-full h-screen overflow-hidden bg-gray-900 text-white px-5 relative '>
      <Navbar />
      <TodoList />
      


    

      <DeleteAllButton />
    
      <div>
        <AddTaskButton  />
      </div>

      {
        isShowform ? <TodoForm  /> : ''
      }



 
    </div>
  )
}

export default Homepage
