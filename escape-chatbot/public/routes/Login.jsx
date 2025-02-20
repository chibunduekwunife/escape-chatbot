import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import AppButton from '../components/stateless/AppButton.jsx';

const Login = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!username || !password) {
            alert('Username and password are required!');
            return;
        }
        navigate('/settings');
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-green-300 font-mono p-6"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(20,20,20,0.9) 30%, rgba(0,0,0,1) 100%),
          url('/images/jester.webp')`,
        backgroundSize: "cover, 1000px 1000px",
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "center, 0px 0px",
        backgroundColor: "#000",
        animation: "moveJesterPattern 30s linear infinite",
      }}
    >
      <style>
        {`
          @keyframes moveJesterPattern {
            0% { background-position: center, 0px 0px; }
            100% { background-position: center, 200px 200px; }
          }
        `}
      </style>

      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-green-500 drop-shadow-[2px_4px_6px_rgba(0,255,0,0.7)]">
        Log In
      </h1>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-900 border-2 border-green-500 rounded-xl p-6 shadow-xl space-y-6 text-green-200">
        {/* Username Input */}
        <div className="flex flex-col">
          <label className="text-green-400 font-bold mb-2">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="p-2 rounded bg-gray-800 border border-green-400 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Password Input */}
        <div className="flex flex-col relative">
          <label className="text-green-400 font-bold mb-2">Password:</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="p-2 flex-grow rounded bg-gray-800 border border-green-400 text-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            
            <AppButton type="button" text={showPassword ? "Hide" : "Show"} onClick={togglePasswordVisibility} className="ml-2 px-3 py-2 text-sm text-green-400 border border-green-500 rounded" />
          </div>
        </div>

        {/* Submit Button */}
        
        <AppButton text='Log In' type='submit' otherClasses='mt-4 w-full'/>
      </form>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        {/* Sign Up Button */}
        <AppButton text='Forgot Password?' onClick={() => navigate('*')} />

        <AppButton text='Sign Up' onClick={() => navigate('/signup')} />

        {/* Back Button */}
        <AppButton text="Back to Settings" onClick={() => navigate('/settings')}/>
      </div>
    </div>
  );
};

export default Login;
