// teste da rota moves

const { expect } = require('chai');

describe('Routes: Moves', () => {
  // movimento padrão retornado da rota com o id 'A2'
  const defaultMoves = [
    ['C', 0],
    ['C', 2],
    ['B', 3],
  ];

  // suíte de teste relacionada ao método GET
  // como o request (supertest) vamos fazer uma requisição http para a rota e com o expect(Chai) vamos fazer a asserção comparando com o defaultMoves
  describe('GET /moves/:{square}', () => {
    it('should return a list of moves for a specific position', (done) => {
      request.get('/moves/A2').end((err, res) => {
        console.log('response', res.body);
        expect(res.body).to.eql(defaultMoves);
        done(err);
      });
    });
  });
});
