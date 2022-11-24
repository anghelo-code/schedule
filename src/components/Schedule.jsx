import { ScheduleBody } from "./ScheduleBody";
import { ScheduleHead } from "./ScheduleHead"

export const Schedule = () => {
  const colorMate="#EED9C4";
  const colorProgra="#FFEBCD";
  const colorBase="#D8BFD8";
  const colorTeoria="#FFFDD0";
  const colorQuechua="#CCCCFF";
  
  
  return (
    <table className="table h-100 table-bordered">
      <ScheduleHead/>

      <ScheduleBody/>
        
    </table>
  )
}
