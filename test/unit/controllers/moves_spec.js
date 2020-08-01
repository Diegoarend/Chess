import sinon from 'sinon';
import MovesController from '../../../src/controllers/moves';

describe('Routes: Moves', () => {
  const defaultMoves = [
    [2, 0],
    [2, 2],
    [1, 3],
  ];

  describe('get() moves/:square', () => {
    it('should return a list of moves for a specific position', () => {
      // obj fake de requisição enviada pela rota do express
      const request = {};
      // obj fake de resposta enviada pela rota do express
      const response = {
        // adicionado spy do sinan para validar que o metodo send está chamada com o parâmetro certo
        send: sinon.spy(),
      };

      const movesController = new MovesController();
      // passamos os objetos fakes criados para o método get do movesController
      movesController.get(request, response);
      // verificamos se o metodo send foi chamado
      expect(response.send.called).to.be.true;
      // verificamos se o mesmo foi chamado com o parâmetro defaultMoves
      expect(response.send.calledWith(defaultMoves)).to.be.true;
    });
  });
});
