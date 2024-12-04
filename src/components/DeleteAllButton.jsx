import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'
import ConfirmDelete from './ConfirmDelete'

const DeleteAllButton = () => {

    const { deleteAll, confirmDelete, isConfirm} = useContext(TodoContext)


    
  return (
    <div>
      <button onClick={confirmDelete} className='py-3 px-6 bg-red-800 rounded-lg absolute bottom-2 left-5'>
        DELETE ALL
      </button>

      {
        isConfirm ? <ConfirmDelete yes={deleteAll} no={confirmDelete} /> : ''
      }

    </div>
  )
}

export default DeleteAllButton
