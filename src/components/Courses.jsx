import { useContext } from "react";
import { OneCourses } from './OneCourses';
import { TodoContext } from '../context/TodoContext';

export const Courses = () => {

  const { todos, todosCount } =  useContext( TodoContext );
  console.log(todos);
  console.log(todosCount);
  return (
    <div className="list-group border p-4">
      <h2 className="text-center">Cursos</h2>

      {
        todos.map( ({ id, values, color }) => (
          <OneCourses  key={ id } name={ values.nombre } nameT="Juan Florez" id={id} classDiv={ color } />

        ))
      }
    </div>

  )
}
