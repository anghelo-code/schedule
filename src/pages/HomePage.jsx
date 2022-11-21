import { Courses } from "../components/Courses"
import { Form } from "../components/Form"

export const HomePage = () => {
  return (
    <div className="countainer p-3">
      <h1 className="text-center" >Horario</h1>
      <hr />
      
      <section >
        {/* Form */}
        <Form  />

        {/* courses */}
        <Courses />
      </section>
      
    </div>
  )
}


