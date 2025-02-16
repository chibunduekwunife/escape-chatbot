import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
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

      <h1 className="text-7xl font-extrabold mb-6 text-green-500 drop-shadow-[2px_4px_6px_rgba(0,255,0,0.7)]">
        404
      </h1>

      <p className="text-xl text-green-400 mb-4">Oops! The Jester has hidden this page from you.</p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-green-700 text-black font-bold rounded-lg hover:bg-green-500 border border-green-400 transition-all"
      >
        Return to Safety
      </button>
    </div>
  );
};

export default NotFound;
