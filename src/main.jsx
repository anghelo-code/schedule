import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import { SchedulePage } from './pages/SchedulePage';
import { AppSchedule } from './AppSchedule';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppSchedule/>
    </BrowserRouter>
  </React.StrictMode>
)
