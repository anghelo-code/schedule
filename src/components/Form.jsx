import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../context/TodoContext";

import courses from './../../data/courses.json';
import { Options } from "./Options";

export const Form = () => {

  const { handleNewTodo,  getRandomColor } = useContext(TodoContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {

    const curso = {
      id: data.Curso,
      values: courses[data.Curso],
      color:  getRandomColor(),
    }

    handleNewTodo(curso);
  };

  let keys =  Object.keys(courses);

  return (
    <form className="row" onSubmit={ handleSubmit(onSubmit) }>
      <div className="col-md-5">
        <div className="form-group">
          <label htmlFor="Carrera">Carrera Profesional</label>

          <select
            className="form-select"
            aria-label="Default select example"
            name="Carrera"
            {...register("Carrera")}
          >
            <option value="INGSIS">Ingenieria de Sistemas</option>
          </select>
        </div>
      </div>

      <div className="col-md-4">
        <div className="form-group">
          <label htmlFor="Curso">Curso</label>

          <select
            className="form-select"
            aria-label="Default select example"
            name="Curso"
            {...register("Curso")}
          >
            { 
              keys.map((key) => (
                <Options  key={key} value={ key }  text={ courses[key].nombre + ' - ' + key } />
              ))
            }
          </select>
        </div>
      </div>

      <div className="col-md-3">
        <br />
        <button className="btn btn-primary" name="button-r">Agregar Curso</button>
      </div>
    </form>
  )
}