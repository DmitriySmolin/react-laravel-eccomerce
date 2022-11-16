import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/animate.min.css';
import '../src/assets/css/custom.scss';
import '../src/assets/css/fontawesome.scss';
import '../src/assets/css/placeholder-loading.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);


reportWebVitals();
