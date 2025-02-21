import express from "express";

const router = express.Router();

import { getLeaderboard } from '../controllers/leaderboardController.js';

// route to get the leaderboard from leaderboard controller

router.get("/", getLeaderboard);

export default router;
