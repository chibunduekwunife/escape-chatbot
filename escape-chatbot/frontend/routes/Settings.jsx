import React, { useState } from "react";
import { useNavigate } from "react-router";

const Settings = () => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    sound: true,
    notifications: true,
    theme: "Hacky Green",
  });

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

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
        Settings
      </h1>

      <div className="w-full max-w-md bg-gray-900 border-2 border-green-500 rounded-xl p-6 shadow-xl space-y-6 text-green-200">
        {/* Sound Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">Sound:</span>
          <button
            onClick={() => toggleSetting("sound")}
            className={`px-4 py-2 rounded-lg font-bold border border-green-400 ${settings.sound ? "bg-green-700" : "bg-gray-700"}`}
          >
            {settings.sound ? "On" : "Off"}
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">Notifications:</span>
          <button
            onClick={() => toggleSetting("notifications")}
            className={`px-4 py-2 rounded-lg font-bold border border-green-400 ${settings.notifications ? "bg-green-700" : "bg-gray-700"}`}
          >
            {settings.notifications ? "On" : "Off"}
          </button>
        </div>

        {/* Theme */}
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">Theme:</span>
          <select
            value={settings.theme}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            className="px-4 py-2 rounded-lg font-bold border border-green-400 bg-gray-700 text-green-300"
          >
            <option>Hacky Green</option>
            <option>Dark Mode</option>
            <option>Light Mode</option>
          </select>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate("/profile")}
          className="px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all"
        >
          Go to Profile
        </button>
        <button
          onClick={() => navigate("/login")}
          className="px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all"
        >
          Create Account
        </button>
      </div>

      <button
        // onClick={() => window.history.back()}
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all"
      >
        Back to Menu
      </button>
    </div>
  );
};

export default Settings;
