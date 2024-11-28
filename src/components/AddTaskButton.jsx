import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'

const AddTaskButton = () => {

  const { todoData ,  isShowform, setIsShowform} = useContext(TodoContext)



   const showFrom =()=>{
    if (!isShowform) {
      setIsShowform(true)
    }else{
      setIsShowform(false)
    }


   }

  return (
    <button onClick={showFrom} className='h-20 w-20 p-10 bg-blue-600 flex justify-center items-center rounded-full absolute z-40 text-white font-bold bottom-5 right-5'>Add</button>
  )

}

export default AddTaskButton
