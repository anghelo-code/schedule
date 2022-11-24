import { useTodo } from '../hooks/useTodo';
import { TodoContext } from './TodoContext'
export const TodoProvider = ({ children }) => {
  const ListCourses = useTodo();
  
  return (
    <TodoContext.Provider value={{ ...ListCourses }}>
      {children}
    </TodoContext.Provider>
  )
}
