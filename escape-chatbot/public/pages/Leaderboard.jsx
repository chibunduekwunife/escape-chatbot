import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import AppButton from '../components/stateless/AppButton.jsx';

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Simulating fetch call for leaderboard data
  //   const fakeLeaderboard = [
  //     { name: "JesterMaster", score: 5000 },
  //     { name: "HackTheBot", score: 4200 },
  //     { name: "PuzzleKing", score: 3900 },
  //     { name: "ChatEscapee", score: 3500 },
  //     { name: "RiddleWizard", score: 3000 },
  //   ];
  //   setScores(fakeLeaderboard);
  // }, []);

  useEffect(async () => {

    const res = await fetch (`http://localhost:5001/api/leaderboard`)
  
      if (!res.ok) {
        throw new Error('Failed to fetch leaderboard data')
      } 
  
      const leaderboard = await res.json();
      setScores(leaderboard);
  })

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
        Leaderboard
      </h1>

      <div className="w-full max-w-xl bg-gray-900 border-2 border-green-500 rounded-xl p-6 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-green-400 border-b border-green-600">
              <th className="py-3 px-4">Rank</th>
              <th className="py-3 px-4">Player</th>
              <th className="py-3 px-4">Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((player, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-green-800/30" : "bg-green-900/30"
                } hover:bg-green-700/30 transition-all duration-200`}
              >
                <td id='player-rank' className="py-3 px-4 font-bold text-green-300">
                  {/* {index + 1} */}
                  {player.rank}
                </td>
                <td id='player-name' className="py-3 px-4 text-green-200">{player.name}</td>
                <td id='player-score' className="py-3 px-4 text-green-300">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-x-5 mt-6">
        
        <AppButton text="<" otherClasses="font-bold" id='get-prev-stat-btn'/>

        <AppButton text="Back to Menu" onClick={() => navigate('/')}/>

        <AppButton text=">" otherClasses="font-bold" id='get-next-stat-btn'/>
      </div>
    </div>
  );
};

export default Leaderboard;
