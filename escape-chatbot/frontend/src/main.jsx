import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";
import Game from '../routes/Game.jsx'
import Leaderboard from '../routes/Leaderboard.jsx'
import Instructions from '../routes/Instructions.jsx'
import Settings from '../routes/Settings.jsx'
import Profile from '../routes/Profile.jsx';
import NotFound from '../routes/NotFound.jsx'
import React from 'react'
import App from './App.jsx'
import './styles.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>

    <BrowserRouter>
      
      <Routes>

        <Route index element={<App />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        <Route path="*" element={<NotFound /> } />
        <Route path="game" element={<Game />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)
