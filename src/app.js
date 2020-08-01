// vamos importar o framework para lidar com as requisições http
import express from 'express';

// incializamos o express na const app
const app = express();
// no método use vamos passar o middleware express.json() para que o express
// transforme o corpo das requisições em json
app.use(express.json());
// criamos uma rota GET e passamos a callback que será chamada quando o rota receber
// uma requisição
app.get('/moves/:square', (req, res) => {
  const position = req.params;
  const resp = [
    [2, 0],
    [2, 2],
    [1, 3],
  ];
  return res.send(resp);
});
export default app;
