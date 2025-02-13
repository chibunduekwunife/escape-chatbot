import React from "react";
import Button from "../components/stateless/Button";

export default function Home() {
  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-center items-center text-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 gap-6"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(20,20,20,0.9) 30%, rgba(0,0,0,1) 100%), 
          url('/images/jester.webp')`,
        backgroundSize: "cover, 500px 500px",
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "center, 0px 0px",
        backgroundColor: "#000",
        animation: "moveJesterPattern 30s linear infinite"
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
      <h1 className="text-amber-400 text-6xl sm:text-7xl font-extrabold mb-8 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.9)] tracking-wide font-jester">
        Escape the Chatbot
      </h1>

      {/* Buttons */}
      <Button text="Start Game" path="*" />
      <Button text="Instructions" path="/" />
      <Button text="Leaderboard" path="/" />

      {/* Footer */}
      <p className="text-amber-400 text-base sm:text-lg font-semibold mt-12 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)] tracking-widest font-ringmaster">
        Made by Chibundu Ekwunife
      </p>
    </div>
  );
}
