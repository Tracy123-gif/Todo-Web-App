import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'
import ConfirmDelete from './ConfirmDelete'

const DeleteAllButton = () => {

    const { deleteAll, isShowform, setIsShowform } = useContext(TodoContext)
    const [isConfirm, setIsConfirm] = useState(false)

    const confirmDelete =()=>{
        if (!isConfirm) {
            setIsConfirm(true)
        }else{
            setIsConfirm(false)
        }
    }
  return (
    <div>
      <button onClick={confirmDelete} className='py-3 px-6 bg-red-800 rounded-lg absolute bottom-5 left-5'>
        DELETE ALL
      </button>

      {
        isConfirm ? <ConfirmDelete yes={deleteAll} no={confirmDelete} /> : ''
      }

    </div>
  )
}

export default DeleteAllButton
