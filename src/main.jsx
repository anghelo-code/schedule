import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppSchedule } from './AppSchedule';
import 'animate.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <AppSchedule/>
    </BrowserRouter>
  // </React.StrictMode>
)
