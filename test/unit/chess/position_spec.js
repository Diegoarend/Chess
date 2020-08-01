import { expect } from 'chai';
import Position from '../../../src/chess/position';

describe('Position test', () => {
  it('Test position constructor', () => {
    const square = 'A2';
    const position = new Position(square);
    expect(position.x).to.be.equal(0);
    expect(position.y).to.be.equal(1);
  });
});
