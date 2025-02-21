import React, { useState } from "react";
import { useNavigate } from "react-router";
import AppButton from '../components/stateless/AppButton.jsx';

const Profile = () => {
  const [user, setUser] = useState({
    name: "JesterMaster",
    username: "trickster123",
    password: "********",
    level: 7,
    score: 3400,
    avatar: "/images/questionmark.webp",
    email: "jester@escape.com",
    joined: "January 2025",
  });

  const handleEdit = (field) => {
    const newValue = prompt(`Enter new ${field}:`, user[field]);
    if (newValue !== null && newValue !== "") {
      setUser({ ...user, [field]: newValue });
    }
  };

  const navigate = useNavigate();

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

      <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-green-500 drop-shadow-[2px_4px_6px_rgba(0,255,0,0.7)]">
        Your Profile
      </h1>

      <div className="w-full max-w-md bg-gray-900 border-2 border-green-500 rounded-xl p-6 shadow-xl space-y-6 text-green-200">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={user.avatar}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-green-500 shadow-lg"
          />
        </div>

        {/* User Info */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p><span className="text-green-400 font-bold">Name:</span> {user.name}</p>
            <AppButton onClick={() => handleEdit('name')} text='Edit' className="text-green-400 underline cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
            <p><span className="text-green-400 font-bold">Username:</span> {user.username}</p>
            <AppButton text='Edit' onClick={() => handleEdit('username')} className="text-green-400 underline cursor-pointer"/>
          </div>
          <div className="flex justify-between items-center">
            <p><span className="text-green-400 font-bold">Password:</span> {user.password}</p>
            <AppButton text='Edit' onClick={() => handleEdit('password')} className="text-green-400 underline cursor-pointer"/>
          </div>
          <div className="flex justify-between items-center">
            <p><span className="text-green-400 font-bold">Email:</span> {user.email}</p>
            <AppButton text='Edit' onClick={() => handleEdit('email')} className="text-green-400 underline cursor-pointer"/>
          </div>
          <p><span className="text-green-400 font-bold">Level:</span> {user.level}</p>
          <p><span className="text-green-400 font-bold">Score:</span> {user.score}</p>
          <p><span className="text-green-400 font-bold">Joined:</span> {user.joined}</p>
        </div>
      </div>

      <div className='space-x-4 mt-6'>
        <AppButton text='Log Out' onClick={() => navigate('*')} />
        <AppButton text='Delete Account' onClick={() => navigate("*")} />
        <AppButton text='Back to Settings' onClick={() => navigate('/settings')} />
      </div>

    </div>
  );
};

export default Profile;
