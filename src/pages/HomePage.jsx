import { Courses } from "../components/Courses";
import { Form } from "../components/Form";
import { LinkButton } from "../components/extra";
import './../app.css';

export const HomePage = () => {
  return (
    <div className="countainer p-3">
      <h1 className="text-center" >Horario</h1>
      <hr />

      <section className="p-3 " >
        {/* Form */}
        <div>
          <Form />
        </div>

        <br />
        <br />
        {/* courses */}
        <div className="animate__animated animate_fadeIn bodyHome">
          <div className="animate__backOutLeft w-25">
            <Courses />
          </div>

          <LinkButton path="horario" text="Generar" />
        </div>

      </section>
    </div>
  )
}