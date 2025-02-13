import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";

import React from 'react'
import App from './App.jsx'
import './styles.css'
// import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
      
      <Routes>

        <Route index element={<App />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        <Route path="*" element={<h1>Not Found</h1>} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)
