// teste da rota moves

const { expect } = require('chai');

describe('Routes: Moves', () => {
  // movimento padrão retornado da rota com o id 'A2'
  const defaultMoves = [
    [2, 0],
    [2, 2],
    [1, 3],
  ];

  // suíte de teste relacionada ao método GET
  // como o request (supertest) vamos fazer uma requisição http para a rota e com o expect(Chai) vamos fazer a asserção comparando com o defaultMoves
  describe('GET /moves/{square}', () => {
    it('should return a list of moves for a specific position', (done) => {
      request.get('/moves/A2').end((err, res) => {
        expect(res.body[0]).to.eql(defaultMoves);
        done(err);
      });
    });
  });
});
