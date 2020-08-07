import Position from '../chess/Position';
import Knight from '../chess/Knight';
import Board from '../chess/Board';


class MovesController {
  get(req, res) {
    const { square } = req.params;
    const board = new Board();
    const position = new Position(square);
    if (position.x === -99) return res.send('Posição Inválida');
    const knight = new Knight(position);
    board.setAtPosition(knight.position.x, knight.position.y, knight);
    const allMoves = board.getAllMovesFromPiece(
      knight.position.x,
      knight.position.y
    );
    const alphaNum = board.getAlphaNumeric(allMoves);
    return res.send(alphaNum);
  }
}

export default MovesController;
