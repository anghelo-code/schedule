import { useContext } from "react";
import { OneCourse } from './OneCourse';
import { TodoContext } from '../../context';

export const Courses = () => {

  const { todos, handleRemoveTodo, todosCount } =  useContext( TodoContext );

  return (
    <div className="list-group border p-4">
      <h2 className="text-center">Cursos</h2>

      {
        todos.map( ({ id, values, color }) => (
          <OneCourse  
            key={ id + todosCount } 
            name={ values["nombre"] }
            id={id}
            aulas={ values.aulas }
            classDiv={ color } 
            handleRemoveTodo={ (id) => handleRemoveTodo(id) }  />

        ))
      }
    </div>

  )
}
