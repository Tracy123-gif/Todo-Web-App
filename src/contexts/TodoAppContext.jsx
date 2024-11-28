import React, {createContext, useState, useEffect} from 'react';

export const TodoContext = createContext();

const TodoAppContextProvideder = ({children}) => {
    // Load initial state from localStorage or initialize as an empty array
    const [todoData, setTodoData] = useState(() => {
        const storedTodos = localStorage.getItem('todoData');
        return storedTodos
            ? JSON.parse(storedTodos)
            : [];
    });

    const [input, setInput] = useState('');
    const [details, setDetails ] = useState('')
    const [isShowform, setIsShowform] = useState(false)

    // Add a new todo
    const addToTodoData = (e) => {
        e.preventDefault();
        if (!input.trim() && !details.trim()) 
            return; // Prevent adding empty tasks
        
        const newTodo = {
            name: input,
            detail :details
        };
        const updatedTodoData = [
            ...todoData,
            newTodo
        ];
        setTodoData(updatedTodoData);
        setInput(''); // Clear input field

        setIsShowform(false)
    };

    const deleteAll = () => {
        setTodoData([])

    }
    // Save todos to localStorage whenever `todoData` changes
    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }, [todoData]);

    return (
        <TodoContext.Provider
            value={{
                todoData,
                input,
                setInput,
                addToTodoData,
                deleteAll, isShowform, setIsShowform, details, setDetails 
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoAppContextProvideder;