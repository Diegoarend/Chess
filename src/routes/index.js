// arquivo responsável por carregar todas as rotas da aplicação
import express from 'express';

import movesRoute from './moves';

const router = express.Router();

// passamos o prefixo e carregamos a rota de moves
router.use('/moves/:square', movesRoute);

router.get('/', (req, res) =>
  res.send(
    'acesse /moves/(posição) para saber os movimentos possíveis da peça cavalo '
  )
);

export default router;
