import { useContext, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TodoContext } from "../../context";
import Select from 'react-select'
import { useFetch } from "../../hooks";

import courses from '../../../data/IIS.json';
import { Options } from "./Options";


export const Form = () => {
  const { setColors, colors, todos, handleNewTodo} = useContext(TodoContext);
  const { handleSubmit, register } = useForm();
  
  const onSubmit = data => {

    const curso = {
      id: data.Curso,
      values: listCourses.data[data.Curso],
      color:  colors[colors.length - 1],
    }
    
    setColors(c => ( c.filter( color => color != curso.color )) );

    const chekTodo = todos.filter((todo) => todo.id == data.Curso)
    if (chekTodo.length == 0){
      handleNewTodo(curso);
    }
  };

  
  const urlCareers = `https://schedule-backend-kv9u.onrender.com/careers/`;
  const jsonCarrers = useFetch(urlCareers);
  // console.log(jsonCarrers.data?.map( career => ({ label:career.name, value:career.id  }) ));

  
  const [Courses, setCourses] = useState(45);
  const [urlCourses, setUrlCourses] = useState(`https://schedule-backend-kv9u.onrender.com/courses/45`);
  const [listCourses, setListCourses] = useState([])
  const [valueCourses, setValueCourses] = useState([])





  const handleChange = (selectedOption) => {
    setCourses(selectedOption.value);
    
    // setListCourses(jsonCourses.data);
    // console.log(listCourses);
    // if (listCourses != null){
    //   keys =  Object.keys(listCourses);}
  }
  
  const jsonCourses = useFetch(urlCourses);

  useEffect(() => {
    setUrlCourses(`https://schedule-backend-kv9u.onrender.com/courses/${ Courses }`);
    setListCourses(jsonCourses);
    if (jsonCourses.data != null){
      const list = []
      const objetoCour = jsonCourses.data
      for(const prop in objetoCour) {
        list.push({label: objetoCour[prop]["nombre"] + " - " + prop , value: prop })
      }
      setValueCourses(list);
    }
  }, [Courses])

  
  

  const handleCourses = (selectedOption) => {
    console.log(selectedOption);
    
  }
  

  

  return (
    <form className="row" onSubmit={ handleSubmit(onSubmit) }>
      <div className="col-md-5">
        <div className="form-group">
          <label htmlFor="Carrera">Carrera Profesional</label>

          <Select
            // className="form-select"
            id="Carrera"
            isSearchable={ true }
            options = { jsonCarrers.data?.map( career => ({ label:career.name, value:career.id  }) ) }
            name="Carrera"
            onChange= { handleChange }
          />
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
            <option value="" disabled selected>Seleccione un Curso</option>
            { 
              valueCourses.map((key) => (
                <Options  key={key.value} value={ key.value }  text={ key.label } />
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