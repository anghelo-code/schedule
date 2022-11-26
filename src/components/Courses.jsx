import { useContext } from "react";
import { OneCourses } from './OneCourses';
import { TodoContext } from '../context/TodoContext';

export const Courses = () => {

  const { todos, handleRemoveTodo, todosCount } =  useContext( TodoContext );

  return (
    <div className="list-group border p-4">
      <h2 className="text-center">Cursos</h2>

      {
        todos.map( ({ id, values, color }) => (
          <OneCourses  
            key={ id + todosCount } 
            name={ values.nombre } 
            times={ values.horas } 
            id={id} 
            classDiv={ color } 
            handleRemoveTodo={ (id) => handleRemoveTodo(id) }  />

        ))
      }
    </div>

  )
}
