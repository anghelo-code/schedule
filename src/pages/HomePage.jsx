import { Courses } from "../components/Courses"
import { Form } from "../components/Form"

export const HomePage = () => {
  return (
    <div className="countainer">
      <h1>Horario</h1>
      <hr />
      
      <section className="row">
        {/* Form */}
        <Form   />

        {/* courses */}
        <Courses   />
      </section>
      
    </div>
  )
}


