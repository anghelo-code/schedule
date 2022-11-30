import { Routes, Route, Navigate} from 'react-router-dom';
import { NavBar } from './components/extra';
import { TodoProvider } from './context';
import { HomePage, SchedulePage } from './pages';

export const AppSchedule = () => {

  return (
    <TodoProvider>
      <NavBar/>
      
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="horario" element={ <SchedulePage/> }/>

        <Route path="/*"  element={ <Navigate to="/" /> }/>
      </Routes>
    </TodoProvider>
  )
}
