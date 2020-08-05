class Board {
  constructor() {
    // o método outOfLimit vai verificar se o movimento irá levar a peça para fora do board
    this.outOfLimit = (x, y) => x <= -1 || x >= 8 || y <= -1 || y >= 8;

    this.matrix = {};

    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const columns = [1, 2, 3, 4, 5, 6, 7, 8];
    // vamos criar uma matrix para representar o board do xadrez
    for (const r in rows) {
      for (const c in columns) {
        this.matrix[`${r}_${c}`] = null;
      }
    }
  }

  // informa qual peça está na posição passada
  getAtPosition(x, y) {
    return this.matrix[`${x}_${y}`];
  }

  // seta uma nova posição para a peça
  setAtPosition(x, y, piece) {
    this.matrix[`${x}_${y}`] = piece;
  }

  // pega todos os movimentos que a peça pode fazer(desde que não saia do board)
  getAllMovesFromPiece(x, y) {
    function filterby(move) {
      if (!(move[0] <= -1 || move[0] >= 8 || move[1] <= -1 || move[1] >= 8)) {
        move = [move[0], move[1]];
        return move;
      }
    }

    function sum(move) {
      move[0] += x;
      move[1] += y;
      return move;
    }
    const nextMoves = this.matrix[`${x}_${y}`].moves.map(sum).filter(filterby);

    return nextMoves;
  }

  getAlphaNumeric(nextMoves) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const proxPosicoes = nextMoves.map((move) => {
      move = [rows[move[0]], move[1] + 1];
      return move;
    });
    return proxPosicoes;
  }
}

export default Board;
