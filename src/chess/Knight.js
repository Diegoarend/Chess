// por enquanto na classe knight(cavalo) irei guardar a posição e todos os movimentos possíveis da mesma
// bem como um método para pegar a posição atual e outro para setar uma posição futura

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
