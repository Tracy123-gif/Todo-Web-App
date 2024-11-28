import React from 'react'
import Homepage from './pages/Homepage'
import TodoAppContextProvideder from './contexts/TodoAppContext'

const App = () => {
  return (
    <div>
      <TodoAppContextProvideder>
      <Homepage />
      </TodoAppContextProvideder>
    </div>
  )
}

export default App
