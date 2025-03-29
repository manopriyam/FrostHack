// import from libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// import from files
import './index.css'
import App from './App.jsx'


// app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
