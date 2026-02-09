// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/pizzeria-mamma-mia-h7">
      <CartProvider>
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
)
