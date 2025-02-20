import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router";
import Game from '../public/routes/Game.jsx'
import Leaderboard from '../public/routes/Leaderboard.jsx'
import Instructions from '../public/routes/Instructions.jsx'
import Settings from '../public/routes/Settings.jsx'
import Profile from '../public/routes/Profile.jsx';
import NotFound from '../public/routes/NotFound.jsx'
import React from 'react'
import App from './App.jsx'
import Signup from '../public/routes/Signup.jsx'
import Login from '../public/routes/Login.jsx'
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
