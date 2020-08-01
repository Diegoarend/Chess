import { expect } from 'chai';
import Position from '../../../src/chess/position';
import Knight from '../../../src/chess/knight';

describe('Knight test', () => {
  it('Should set knight.position x to 0 and y to 1 when the square is A2', () => {
    const square = 'A2';
    const position = new Position(square);
    const knight = new Knight(position);
    expect(knight.position.x).to.be.equal(0);
    expect(knight.position.y).to.be.equal(1);
  });
});
