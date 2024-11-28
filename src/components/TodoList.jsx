import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoAppContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todoData } = useContext(TodoContext);

  return (
    <div className="relative top-10 bg-gray-800 h-3/4 flex flex-col items-center justify-start rounded-xl py-10 px-8 overflow-hidden overflow-y-scroll max-md:px-3 max-md:py-3">
      {todoData.length === 0 ? (
        <p className="text-white capitalize">You have no tasks. Create one now!</p>
      ) : (
        todoData.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))
      )}
    </div>
  );
};

export default TodoList;
