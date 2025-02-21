import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import leaderboard from './express_routes/leaderboard.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';

const app = express();
const PORT = process.env.game_PORT || 8001;

// get the current file name
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// setup request body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false})) 

// setup static folder - routing from the backend
app.use(express.static(path.join(__dirname, 'public', 'pages')));

// leaderboard route (set query limit to show 5 at a time and arrows on the front end to change this request link or wahtever)
app.use('/api/leaderboard', leaderboard)

// Error Handlers
app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`game server is listening on port ${PORT}`)
})