import { Courses } from "../components/Courses"
import { Schedule } from "../components/Schedule";
import { exportAsImage } from "../helpers/exportAsImage";
import { useRef } from "react";
import { ScheduleV2 } from "../components/ScheduleV2/ScheduleV2";

export const SchedulePage = () => {
  const exportRef = useRef();
  
  return (
    <div className="countainer p-3 vh-100">
      <div className="h-5 position-relative">
        <h1 className="text-center" >Horario</h1>
        <button className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" onClick={() => exportAsImage(exportRef.current, "horario")}>
          Descargar imagen
        </button>
        <hr />
      </div >



      <section className="row h-95 gap-3">
        {/* courses */}
        <div className="animate__backInLeft col-md-3 align-items-center row" >
          <Courses />
        </div>


        {/* schedule */}
        <div className="animate__animated animate_fadeIn col-md-9 p-5 align-items-center row">
          {/* <Schedule exportRef={exportRef} /> */}
          <ScheduleV2 />
        </div>

      </section>


    </div>
  )
}
