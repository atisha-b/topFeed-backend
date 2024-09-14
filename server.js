import express from 'express';
import dotenv from 'dotenv';
import redditRoutes from './src/routes/redditRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());

app.use('/api/reddit', redditRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});