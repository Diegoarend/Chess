// a class Position vai receber as coordenadas da posição em seu constructor
// caso o usuário insira a coordenada com letra minúscula, criei um array para as colunas
// dessa forma vou receber as coordenadas, transformar para minuscula, fazer um split para separar os números
// agora eu consigo transformar ambas as coordenadas em inteiros

class Position {
  constructor(square) {
    const fila = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const coordenates = square.toLowerCase().split('');

    this.x = fila.indexOf(coordenates[0]);
    this.y = parseInt(coordenates[1]) - 1;
  }
}

export default Position;
