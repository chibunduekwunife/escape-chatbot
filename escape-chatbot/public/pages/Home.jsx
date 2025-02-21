import React from "react";
import Button from "../components/stateless/Button";

export default function Home() {

  const buttonStyle = `bg-green-800 hover:bg-green-600 text-gray-300 w-full sm:w-64 md:w-72 lg:w-80 xl:w-96 px-8 py-4 text-xl font-bold rounded-lg shadow-lg border border-green-400 transition-all duration-300 ease-in-out
                  hover:scale-105`;

  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-center items-center text-green-300 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 gap-6 font-mono"
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
      {/* Embedded Style for Jester Pattern Animation */}
      <style>
        {`
          @keyframes moveJesterPattern {
            0% {
              background-position: center, 0px 0px;
            }
            100% {
              background-position: center, 200px 200px;
            }
          }
        `}
      </style>

      {/* Title */}
      <h1 className="text-green-500 text-6xl sm:text-7xl font-extrabold mb-5 drop-shadow-[2px_4px_6px_rgba(0,255,0,0.7)] tracking-wide">
        Escape the Chatbot
      </h1>

      <p className="text-green-400 text-base sm:text-lg font-semibold drop-shadow-[2px_2px_4px_rgba(0,255,0,0.5)] tracking-widest">
        Jester Edition
      </p>

      {/* Buttons */}
      <Button text="Start Game" path="game" className={buttonStyle} />
      <Button text="Instructions" path="instructions" className={buttonStyle} />
      <Button text="Leaderboard" path="leaderboard" className={buttonStyle} />
      <Button text="Settings" path="settings" className={buttonStyle} />

      {/* Footer */}
      <p className="text-green-400 text-base sm:text-lg font-semibold mt-12 drop-shadow-[2px_2px_4px_rgba(0,255,0,0.5)] tracking-widest">
        Step in if you dare...
      </p>
    </div>
  );
}

