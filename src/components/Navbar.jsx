import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-12 bg-gray-800 flex items-center text-white px-5 relative top-5 rounded-lg justify-between drop-shadow-lg'>
      <div>
        <h1>TODOLIST</h1>
      </div>
      <div>
        Logout
      </div>
    </div>
  )
}

export default Navbar
