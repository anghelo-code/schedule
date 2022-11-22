import { useTodo } from '../hooks/useTodo';
import { TodoContext } from './TodoContext'
export const TodoProvider = ({ children }) => {
  // todos, todosCount, handleRemoveTodo, handleToggleTodo, handleNewTodo 
  let colores = [];

  const getRandomColor = () => {
    let num = (Math.floor(Math.random() * 4) * 4).toString(16);
    let letters = ['0', 'F', num];
    let color = '#';

    for (var i = 0; i < 3; i++) {
      let pos = Math.floor(Math.random() * letters.length);
      color += letters[pos];
      letters.splice(pos, 1);
    }

    //para evitar que se repitan colores 
    if (colores.includes(color))
      return getRandomColor();
    else
      colores.push(color)

    return color;
  }

  const ListCourses = useTodo();
  return (
    <TodoContext.Provider value={{ ...ListCourses, getRandomColor }}>
      {children}
    </TodoContext.Provider>
  )
}
