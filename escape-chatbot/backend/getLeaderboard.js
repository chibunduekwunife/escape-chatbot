
//connect to database
// rank == id, player == name, score == score
//render on leaderboard route

const leaderboard = [
    {id: 1, name: 'Player 1', score: 100},
    {id: 2, name: 'Player 2', score: 200},
    {id: 3, name: 'Player 3', score: 300},
    {id: 4, name: 'Player 4', score: 400},
    {id: 5, name: 'Player 5', score: 500},
]

const getLeaderboard = () => {
    return leaderboard;
}

export const leaderboardLength = () => {
    return leaderboard.length;
}

export default getLeaderboard;


