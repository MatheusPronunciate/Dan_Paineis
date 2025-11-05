// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css' // Ou seu CSS principal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Use o HashRouter aqui */}
    <HashRouter> 
      <App />
    </HashRouter>
  </React.StrictMode>
)