import { useTodo } from '../hooks';
import { TodoContext } from './TodoContext'
export const TodoProvider = ({ children }) => {

  // todos, todosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo;
  const ListCourses = useTodo();
  
  return (
    <TodoContext.Provider value={{ ...ListCourses }}>
      {children}
    </TodoContext.Provider>
  )
}
