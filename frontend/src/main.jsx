import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColleaguesContextProvider } from './context/ColleaguesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColleaguesContextProvider>
      <App />
    </ColleaguesContextProvider>
  </React.StrictMode>,
)
