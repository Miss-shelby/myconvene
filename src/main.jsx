import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserContextParent from "./context/useContext.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextParent>
    <App />
    </UserContextParent>
   
  </React.StrictMode>,
)
