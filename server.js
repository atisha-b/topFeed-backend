import express from 'express';
import dotenv from 'dotenv';
import redditRoutes from './src/routes/redditRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the redditRoutes module at the /api/reddit path
app.use('/api/reddit', redditRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
