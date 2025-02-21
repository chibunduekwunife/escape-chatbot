import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";
import Game from '../public/pages/Game.jsx'
import Leaderboard from '../public/pages/Leaderboard.jsx'
import Instructions from '../public/pages/Instructions.jsx'
import Settings from '../public/pages/Settings.jsx'
import Profile from '../public/pages/Profile.jsx';
import NotFound from '../public/pages/NotFound.jsx'
import React from 'react'
import App from './App.jsx'
import Signup from '../public/pages/Signup.jsx'
import Login from '../public/pages/Login.jsx'
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
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

      </Routes>

    </BrowserRouter>

  </StrictMode>
)
