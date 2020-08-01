class Position {
  constructor(square) {
    const fila = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const coordenates = square.toLowerCase().split('');

    this.x = fila.indexOf(coordenates[0]);
    this.y = parseInt(coordenates[1]) - 1;
  }
}

export default Position;
