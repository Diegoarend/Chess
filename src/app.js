// vamos importar o framework para lidar com as requisições http
import express from 'express';
// vamos importar as rotas criadas
import routes from './routes';

// incializamos o express na const app
const app = express();
// no método use vamos passar o middleware express.json() para que o express
// transforme o corpo das requisições em json
app.use(express.json());
// criamos uma rota GET e passamos a callback que será chamada quando o rota receber
// uma requisição
app.use('/', routes);

export default app;
