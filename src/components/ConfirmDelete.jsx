import React, { useContext } from 'react'
import { TodoContext } from '../contexts/TodoAppContext'

const ConfirmDelete = ({yes, no}) => {

    const { todoData } = useContext(TodoContext)


    return (
        <>
       { todoData ?
         <div className='h-72 w-2/3 max-md:w-10/12  bg-gray-800 text-white flex flex-col p-7 rounded-md inset-0 m-auto z-40 absolute drop-shadow-2xl border-2 border-white border-opacity-10 justify-center items-center gap-8'>
         <p className='max-md:text-2xl text-3xl capitalise text-center'>Are you sure you want to delete all tasks</p>
         
         <div className='flex justify-around gap-40 max-md:gap-14' >
             <button className='py-3 px-8 rounded-md uppercase bg-gray-700' onClick={no}>No</button>
             <button className='py-3 px-8 rounded-md uppercase bg-red-800' onClick={yes}>Yes</button>
         </div>
         </div>
         :
         <div className='h-72 w-2/3 max-md:w-10/12  bg-gray-800 text-white flex flex-col p-7 rounded-md inset-0 m-auto z-40 absolute drop-shadow-2xl border-2 border-white border-opacity-10 justify-center items-center gap-32'>
            <div className='relative flex items-center justify-center'>
                <div className=''>NO ITEM TO DELETE</div>
            <button className='absolute z-40 py-3 px-8 rounded-md uppercase bg-gray-700 top-10' onClick={no}>CLOSE</button>
            </div>
         </div>
       }
        </>
    )
}

export default ConfirmDelete
