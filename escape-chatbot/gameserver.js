import express from 'express';
import path from 'path';
import leaderboard from './express_routes/leaderboard.js';

const app = express();
const PORT = process.env.game_PORT || 8001;

// setup request body parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: false})) // for parsing application/x-www-form-urlencoded

//routes

// leaderboard route (set query limit to show 5 at a time and arrows on the front end to change this request link or wahtever)
app.use('/api/leaderboard', leaderboard)


app.listen(PORT, () => {
    console.log(`game server is listening on port ${PORT}`)
})