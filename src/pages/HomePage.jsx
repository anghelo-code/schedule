import { Courses } from "../components/Courses"
import { Form } from "../components/Form"

export const HomePage = () => {
  return (
    <div className="countainer m-1">
      <h1 className="text-center" >Horario</h1>
      <hr />
      
      <section className="row h-95">
        {/* Form */}
        <Form  />

        {/* courses */}
        <Courses />
      </section>
      
    </div>
  )
}


