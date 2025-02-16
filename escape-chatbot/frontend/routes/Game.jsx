import React, { useState } from "react";
import { useNavigate } from "react-router";

const Game = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "player" }]);
      setInput("");

      // Simulate AI response after a short delay
      setTimeout(() => {
        const aiResponse = "Let's solve this puzzle together!";
        setMessages((prev) => [...prev, { text: aiResponse, sender: "ai" }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  const handleQuit = () => {
    navigate("/");
  };

  const handleHint = () => {
    navigate("*")
  }

  return (

    <div
      className="relative h-screen bg-gray-900 flex items-center justify-center"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(20,20,20,0.9) 30%, rgba(0,0,0,1) 100%), 
          url('/images/jester.webp')`,
        backgroundSize: "cover, 1000px 1000px",
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "center, 0px 0px",
        backgroundColor: "#000",
        animation: "moveJesterPattern 130s linear infinite",
      }}
    >
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

      {/* Chat Window */}
      <div className="w-full max-w-lg h-5/6 bg-gray-800 border-2 border-green-500 rounded-xl p-4 flex flex-col shadow-xl">
        {/* AI Profile */}
        <div className="flex items-center space-x-3 mb-4 border-b border-green-400 pb-2">
          <img
            src="/public/images/hackerface.jpg"
            alt="AI Profile"
            className="w-12 h-12 rounded-full border-2 border-green-500"
          />
          <h2 className="text-green-300 font-bold text-xl">The Jester</h2>
          
          <button
            onClick={handleQuit}
            className="ml-auto px-3 py-1 bg-red-600 text-white rounded-full hover:bg-red-500"
          >
            Quit
          </button>
          
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-2 space-y-10">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg break-words font-mono ${
                msg.sender === "player"
                  ? "bg-green-200 self-end text-right ml-auto text-green-950"
                  : "bg-green-900 self-start text-left flex items-start text-green-200"
              }`}
              style={{
                maxWidth: "20%",
                minWidth: "fit-content",
                wordBreak: "break-word",
              }}
            >
              {msg.sender === "ai" && (
                <img
                  src="/public/images/questionmark.webp"
                  alt="AI Profile"
                  className="w-8 h-8 rounded-full mr-2 border border-green-500"
                />
              )}
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="mt-2 flex items-center border-t border-green-400 pt-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded-full border border-green-600 bg-gray-700 text-green-300 font-mono focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-green-700 text-black font-bold rounded-full hover:bg-green-500"
          >
            Send
          </button>

          <button
            onClick={handleSend}
            className="ml-2 px-4 py-2 bg-yellow-600 text-black font-bold rounded-full hover:bg-yellow-400"
          >
            Hint?
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Game;
