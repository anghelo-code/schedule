import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../context";
import { useFetch } from "../../hooks";

import { Options } from "./Options";


export const Form = () => {

  const { setColors, colors, todos, handleNewTodo} = useContext(TodoContext);
  const { handleSubmit, register, reset} = useForm( {
    defaultValues: {
      Curso: "None",
  }});
  
  const onSubmit = data => {

    const curso = {
      id: data.Curso,
      values: jsonCourses.data[data.Curso],
      color:  colors[colors.length - 1],
    }
    
    setColors(c => ( c.filter( color => color != curso.color )) );

    const chekTodo = todos.filter((todo) => todo.id == data.Curso)
    if (chekTodo.length == 0){
      handleNewTodo(curso);
    }
    reset({ Curso: "None" })
  };

  const urlCareers = `https://schedule-backend-kv9u.onrender.com/careers/`;
  const jsonCarrers = useFetch(urlCareers);
  const [urlCourses, setUrlCourses] = useState(``);

  const handleChange = (e) => {
    console.log(e.target.value);
    setUrlCourses(`https://schedule-backend-kv9u.onrender.com/courses/${ e.target.value }`);
    setCareer(e.target.value)
  }
  const jsonCourses = useFetch(urlCourses);
  console.log(jsonCourses);

  

  return (
    <form className="row" onSubmit={ handleSubmit(onSubmit) }>
      <div className="col-md-5">
        <div className="form-group">
          <label htmlFor="Carrera">Carrera Profesional</label>

          <select
            className="form-select"
            aria-label="Default select example"
            name="Carrera"
            id="Carrera"
            {...register("Carrera")}
            onChange={ handleChange }
    
          >
            <option value="None" disabled selected>Seleccione una Carrera</option>
            { 
              jsonCarrers.data?.map( career => ( 
                <Options  key={career.id} value={ career.id }  text={ career.name } />
              ))
            }
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
            placeholder="Seleccione un Curso"
            {...register("Curso")}
          >
            <option value="None" disabled selected>Seleccione un Curso</option>
            { 
              !jsonCourses.isLoading && Object.keys(jsonCourses.data).map( course => (
                <Options  key={course} value={ course }  text={ jsonCourses.data[course]["nombre"] + '-' + course } />
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