import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Components/Routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
  <BrowserRouter>
  <AppRoutes/>
  </BrowserRouter>
  </React.StrictMode>

);


