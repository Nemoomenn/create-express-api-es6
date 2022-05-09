import express from 'express';
import catRoute from './routes/cat.router.js'

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: '👋🌎'
  });
});

router.use('/cat', catRoute);

export default router;
