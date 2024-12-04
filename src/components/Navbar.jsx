import React from 'react'
import { GrDocumentNotes } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className='w-full h-12 bg-gray-800 flex items-center text-white px-5 relative top-5 rounded-lg justify-between drop-shadow-lg'>
      <div>
        <h1 className='flex items-center justify-center relative flex-row-reverse gap-1'><span>TODO</span><GrDocumentNotes size={25} color='white' /></h1>
      </div>
      <div>
       
      </div>
    </div>
  )
}

export default Navbar
