
//get leaderboard from database

const db = [
    { rank: 1, name: 'John', score: 100 },
    { rank: 2, name: 'Jane', score: 90 },
    { rank: 3, name: 'Doe', score: 80 },
    { rank: 4, name: 'Smith', score: 70 },
    { rank: 5, name: 'Alex', score: 60 },
    { rank: 6, name: 'Sam', score: 50 },
    { rank: 7, name: 'Tom', score: 40 },
    { rank: 8, name: 'Jerry', score: 30 },
    { rank: 9, name: 'Marry', score: 20 },
    { rank: 10, name: 'Harry', score: 10 }
]


const getLeaderboard = () => {
    return db;
}

export const leaderboardLength = () => {
    return db.length;
}

export default getLeaderboard;