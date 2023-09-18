import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const messages = {
  week: 'Semana',
  day: 'Día',
  month: 'Mes',
  previous: 'Atrás',
  next: 'Después',
  today: 'Hoy',
  agenda: 'Agenda',

  showMore: (total) => `+${total} más`,
}

export const ScheduleV2 = () => {

  return (
    <section className='h-100'>
      <Calendar 
        culture='es' 
        defaultView={ Views.WEEK }
        localizer={ localizer }
        messages={ messages }        
        startAccessor="start"
        endAccessor="end"
      />     
    </section>
  )
}
