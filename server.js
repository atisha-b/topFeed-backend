// src/routes/redditRoutes.js
import express from 'express';
const router = express.Router();

// Handle POST requests to /api/reddit
router.post('/', (req, res) => {
  const { subreddits, userId } = req.body;
  if (!subreddits || !userId) {
    return res.status(400).json({ error: 'Missing subreddits or userId' });
  }
  res.json({ message: `Received subreddits: ${subreddits}, userId: ${userId}` });
});

export default router;
