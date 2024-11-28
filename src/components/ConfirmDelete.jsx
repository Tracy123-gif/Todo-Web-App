import React from 'react'

const ConfirmDelete = ({yes, no}) => {


    return (
        <>
   
       {
         <div className='h-72 w-2/3 bg-gray-800 text-white flex flex-col p-7 rounded-md inset-0 m-auto z-40 absolute drop-shadow-2xl border-2 border-white border-opacity-10 justify-center items-center gap-8'>
         <p className='text-3xl capitalise text-center'>Are you sure you want to delete all tasks</p>
         
         <div className='flex justify-around gap-40 max-md:gap-14' >
             <button className='py-3 px-8 rounded-md uppercase bg-gray-700' onClick={no}>No</button>
             <button className='py-3 px-8 rounded-md uppercase bg-red-800' onClick={yes}>Yes</button>
         </div>
         </div>
       }
        </>
    )
}

export default ConfirmDelete
