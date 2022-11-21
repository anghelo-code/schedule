import { Courses } from "../components/Courses";
import { Form } from "../components/Form";
import './../app.css';

export const HomePage = () => {
  return (
    <div className="countainer p-3">
      <h1 className="text-center" >Horario</h1>
      <hr />
      
      <section className="bodyHome p-3 " >
        {/* Form */}
        <div>
          <Form  />
        </div>
        

        {/* courses */}
        <div className="w-25">
          <Courses />
        </div>

        <button className="btn btn-primary">Generar</button>
      </section>
    </div>
  )
}




