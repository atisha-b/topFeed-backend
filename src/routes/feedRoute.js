import express from 'express';
import feedController from '../controllers/feedController.js';


const router = express.Router();

router.post('/', feedController);


export default router;