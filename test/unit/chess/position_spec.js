import { expect } from 'chai';
import Position from '../../../src/chess/position';

describe('Position test', () => {
  it('Should set x to 0 and y to 1 when the square is A2', () => {
    const square = 'A2';
    const position = new Position(square);
    expect(position.x).to.be.equal(0);
    expect(position.y).to.be.equal(1);
  });
});
