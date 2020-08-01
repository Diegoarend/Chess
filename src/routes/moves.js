// arquivo próprio para cada recurso da api
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const position = req.params;
  const resp = [
    [2, 0],
    [2, 2],
    [1, 3],
  ];
  return res.send(resp);
});
export default router;
