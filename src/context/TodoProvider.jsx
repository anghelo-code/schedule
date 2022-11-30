import { useState, useEffect } from 'react';
import { useTodo } from '../hooks';
import { TodoContext } from './TodoContext'

const init = () =>{
  return JSON.parse(localStorage.getItem('colors')) || ["#73c8a9", "#dee1b6", "#e1b866", "#bd5532", "#a8636e", "#97b59d", "#cfcca8", "#ffe3b3", "#96bda8", "#bfd4ad", "#f7d3a3", "#eca36c", "#f2d786", "#ff9784", "#c09491", "#a4c09a", "#d4d9a1"];
}


export const TodoProvider = ({ children }) => {
  const [colors, setColors] = useState(init());

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  // todos, todosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo;
  const ListCourses = useTodo();

  return (
    <TodoContext.Provider value={{ ...ListCourses ,setColors ,colors }}>
      {children}
    </TodoContext.Provider>
  )
}
