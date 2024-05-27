import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './assets/styles/base.css';
import './assets/styles/components/Header.css';
import './assets/styles/components/Logo.css';
import './assets/styles/components/Table.css';
import './assets/styles/pages/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/base.css';
import './assets/styles/typography.css';
import './assets/styles/links.css';
import './assets/styles/layout.css';
import './assets/styles/buttons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
