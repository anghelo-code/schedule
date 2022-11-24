import { GetDays } from '../help/GetDays';
import { ScheduleTr } from './ScheduleTr';

export const ScheduleBody = () => {
  const [result, hours] = GetDays();

  const textHour = ["7am a 8am", "8am a 9am", "9am a 10am", "10am a 11am", "11am a 12am" , "12am a 1pm", "-------","2pm a 3pm", "3pm a 4pm", "4pm a 5pm", "5pm a 6pm", "6pm a 7pm","7pm a 8pm"];

  return (
    <tbody className="table-group-divider">
      {
        hours.map( (hour) => (
          <tr key={hour}>
            <th>{textHour[hour-7]}</th>
            <ScheduleTr courses={ result[hour.toString()] } />
          </tr>
        ))
      }
    </tbody>
  )
}
