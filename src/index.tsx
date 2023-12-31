import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import reportWebVitals from './common/utils/reportWebVitals';
import MainPage from './pages/MainPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);

reportWebVitals();
