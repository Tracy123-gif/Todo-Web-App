import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'
import { FaPlus } from "react-icons/fa";

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
    <button onClick={showFrom} className='h-14 w-14 p-10 bg-blue-600 flex justify-center items-center rounded-full fixed z-30 text-white font-bold bottom-10 right-10 max-md:right-2 max-md:bottom-2 max-md:w-9 max-md:h-9'><FaPlus size={30} color='white' className='absolute z-40 max-md:size-5'/></button>
  )

}

export default AddTaskButton
