class Board {
  constructor() {
    this.outOfLimit = (x, y) => x <= -1 || x >= 8 || y <= -1 || y >= 8;

    this.matrix = {};

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8];

    for (const r in rows) {
      for (const c in columns) {
        this.matrix[`${r}_${c}`] = null;
      }
    }
  }

  getAtPosition(x, y) {
    return this.matrix[`${x}_${y}`];
  }

  setAtPosition(x, y, piece) {
    this.matrix[`${x}_${y}`] = piece;
  }

  getAllMovesFromPiece(x, y) {
    const nextMoves = [];
    for (const move of this.matrix[`${x}_${y}`].moves) {
      const tX = x + move[0];
      const tY = y + move[1];
      if (!this.outOfLimit(tX, tY)) {
        nextMoves.push([tX, tY]);
      }
    }
    return nextMoves;
  }

  getAlphaNumeric(nextMoves) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const proxPosicoes = nextMoves.map(
      (move) => (move = [rows[move[0]], move[1]])
    );
    return proxPosicoes;
  }
}

export default Board;
