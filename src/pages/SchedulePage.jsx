import { Courses } from "../components/Courses"
import { Form } from "../components/Form"

export const SchedulePage = () => {
  return (
    <div className="countainer">
      <h1>Horario</h1>
      <hr />

      
    <section className="row"></section>
      {/* courses */}
      <Courses  />

      {/* schedule */}
      <Form   />

    </div>
  )
}
