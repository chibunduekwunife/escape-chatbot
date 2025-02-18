import getLeaderboard, { leaderboardLength } from './getLeaderboard.js';


try {
    const leaderboard = getLeaderboard();
    const length = leaderboardLength();
    console.log(leaderboard);
    console.log(`The length of the leaderboard is: ${length}`);
} catch (err) {
    console.error('Error:', err.message)
}