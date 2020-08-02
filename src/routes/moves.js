// arquivo próprio para cada recurso da api
import express from 'express';
import MovesController from '../controllers/moves';

const router = express.Router();

const movesController = new MovesController();

router.get('/:square', (req, res) => {
  movesController.get(req, res);
});
export default router;
