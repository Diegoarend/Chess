import { expect } from 'chai';
import Position from '../../../src/chess/Position';
import Knight from '../../../src/chess/Knight';
import Board from '../../../src/chess/Board';

describe('Board test', () => {
  it('Should set knight in the 0,1 position at board and get the movesFromPiece', () => {
    const square = 'A2';
    const position = new Position(square);
    const knight = new Knight(position);
    const board = new Board();
    const movesFromPiece = [
      [2, 0],
      [2, 2],
      [1, 3],
    ];
    const alpha = [
      ['C', 1],
      ['C', 3],
      ['B', 4],
    ];
    board.setAtPosition(knight.position.x, knight.position.y, knight);
    expect(board.getAtPosition(0, 1)).to.be.equal(knight);
    expect(board.getAllMovesFromPiece(0, 1)).to.be.eql(movesFromPiece);
    expect(board.getAlphaNumeric(movesFromPiece)).to.be.eql(alpha);
  });
});
