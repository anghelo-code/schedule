import { Courses } from "../components/Courses"
import { Schedule } from "../components/Schedule"

export const SchedulePage = () => {
  return (
    <div className="countainer m-1">
      <h1 className="text-center h-5" >Horario</h1>
      <hr />


      <section className="row h-95">
        {/* courses */}
        <div className="col-md-3" >
          <Courses />
        </div>


        {/* schedule */}
        <div className="col-md-9">
          <Schedule />
        </div>

      </section>


    </div>
  )
}
