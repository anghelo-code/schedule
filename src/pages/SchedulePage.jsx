import { Courses } from "../components/Courses"
import { Schedule } from "../components/Schedule";
import './../app.css';


export const SchedulePage = () => {
  return (
    <div className="countainer p-3 vh-100">
      <div className="h-5">
        <h1 className="text-center" >Horario</h1>
        <hr />
      </div >



      <section className="row h-95 gap-3">
        {/* courses */}
        <div className="col-md-3 align-items-center row" >
          <Courses />
        </div>


        {/* schedule */}
        <div className="col-md-9 p-5 align-items-center row">
          <Schedule />
        </div>

      </section>


    </div>
  )
}
