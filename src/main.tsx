import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routing from './components/common/Routing.tsx'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
)
