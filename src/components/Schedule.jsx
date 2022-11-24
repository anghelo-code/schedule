import { ScheduleBody } from "./ScheduleBody";
import { ScheduleHead } from "./ScheduleHead"

export const Schedule = () => {  
  
  return (
    <table className="table h-100 table-bordered">
      <ScheduleHead/>

      <ScheduleBody/>
        
    </table>
  )
}
