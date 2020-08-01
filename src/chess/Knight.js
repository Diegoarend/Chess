import Position from './Position';

class Knight {
  constructor(position) {
    this.position = position;
    this.moves = [
      [-1, -2],
      [-2, -1],
      [1, -2],
      [-2, 1],
      [2, -1],
      [-1, 2],
      [2, 1],
      [1, 2],
    ];
  }

  getPosition() {
    return this.position;
  }

  setPosition(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
}

export default Knight;
