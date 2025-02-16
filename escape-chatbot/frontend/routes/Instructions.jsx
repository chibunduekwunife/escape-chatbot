import React from "react";
import { useNavigate } from "react-router";

const Instructions = () => {

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
        How to Play
      </h1>

      <div className="w-full max-w-xl bg-gray-900 border-2 border-green-500 rounded-xl p-6 shadow-xl space-y-4">
        <p className="text-green-200">
          Welcome to <span className="text-green-400 font-bold">Escape the Chatbot: Jester Edition</span>. Your goal is to
          outsmart the AI chatbot <span className="text-green-400 font-bold">Cipher</span> and escape the digital world.
        </p>

        <ul className="list-disc list-inside text-green-300 space-y-2">
          <li>🧠 Solve puzzles, riddles, and logic challenges.</li>
          <li>🤖 Interact with the chatbot to find clues—but beware of deception!</li>
          <li>🔍 Pay attention to patterns and hidden messages.</li>
          <li>🎭 Watch for glitches—they might hold secrets.</li>
          <li>🚪 Hack the chatbot in the final level to break free!</li>
        </ul>

        <h2 className="text-xl text-green-400 font-bold mt-4">Tips for Success:</h2>
        <ul className="list-disc list-inside text-green-300 space-y-2">
          <li>🔎 Stay curious—sometimes, the obvious answer is a trick.</li>
          <li>🧩 Think outside the box and try unexpected responses.</li>
          <li>💡 If you're stuck, ask for a hint—but use them wisely!</li>
          <li>🎶 Listen carefully; even the chatbot's sarcasm might reveal clues.</li>
        </ul>
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

export default Instructions;
