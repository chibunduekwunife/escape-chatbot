import { getPosts } from './utils.js';
import getLeaderboard, { leaderboardLength } from './getLeaderboard.js';


console.log(getLeaderboard());
console.log(`The length is: ${leaderboardLength()}`);