import { Routes, Route, Navigate} from 'react-router-dom';
import { TodoProvider } from './context/TodoProvider';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';

export const AppSchedule = () => {

  return (
    <TodoProvider>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="horario" element={ <SchedulePage/> }/>

        <Route path="/*"  element={ <Navigate to="/" /> }/>
      </Routes>
    </TodoProvider>
  )
}
