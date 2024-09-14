// src/controllers/redditController.js

export const processRedditData = (req, res) => {
    const { subreddits, userId } = req.body;
    if (!subreddits || !userId) {
      return res.status(400).json({ error: 'Missing subreddits or userId' });
    }
    
    // Process data here (e.g., interact with a database, perform calculations, etc.)
    res.json({ message: `Received subreddits: ${subreddits}, userId: ${userId}` });
  };
  