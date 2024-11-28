import React, {useContext, useState} from 'react'
import {TodoContext} from '../contexts/TodoAppContext'

const TodoForm = () => {

    const {todoData, input, setInput, addToTodoData, setIsShowform, details, setDetails } = useContext(
        TodoContext
    )

    const inputValue = (e) => {
        let value = e.target.value
        setInput(value)
    }
    const cancel = () => {
        setIsShowform(false)
    }

    const setDetailsFunc =(e)=>{
      let value = e.target.value
      setDetails(value)
    }

    return (
        <div>
            <form
                className='max-sm:w-11/12 max-md:h-4/5 z-40  h-96 w-1/2 bg-gray-900 border-2 border-white rounded-lg p-10 text-white absolute m-auto inset-0 flex flex-col '>
                <p className='text-3xl text-bold text-white  mb-5'>Add task</p>
                <input
                    type="text"
                    placeholder='Task name'
                    className='h-10 rounded-lg border-2 border-white p-2 text-white bg-gray-950'
                    value={input}
                    onChange={inputValue}
                    required="required"/>
                    <textarea onChange={setDetailsFunc} value={details} className='p-4 rounded-md mt-10 text-white bg-gray-950' placeholder='Add some description' name="Discription" id="" cols={10} rows={5}></textarea>
                <button
                    className='absolute bottom-2 left-2 bg-gray-700 text-white  px-4 py-2 rounded-lg'
                    onClick={cancel}>cancel</button>
                <button
                    className='absolute bottom-2 right-2 bg-blue-700 text-white  px-4 py-2 rounded-lg '
                    type='submit'
                    onClick={addToTodoData}>Add Task</button>
            </form>
        </div>
    )
}

export default TodoForm
