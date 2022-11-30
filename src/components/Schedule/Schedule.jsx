import { ScheduleBody, ScheduleHead } from "../Schedule";

export const Schedule = ({ exportRef }) => { 
  
  return (
    <table className="table h-100 table-bordered" ref={exportRef}>
      <ScheduleHead/>

      <ScheduleBody/>
        
    </table>
  )
}
