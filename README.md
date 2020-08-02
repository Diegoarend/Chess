Chess API
----------------

This is project has an API to get all the possible moves from a piece(for now just the Knight Piece) in a certain position and also a back-end chess engine made with OOP(in progress).

### Usage

#### Example code
```javascript
const Game = require("oop-chess");

Game.init("andersson", "johnsson");

console.log(Game.status());
Game.movePiece("B", 1, "C", 1)

console.log(Game.status());
Game.movePiece("G", 1, "F", 1)
console.log(Game.status());

Game.movePiece("A", 2, "C", 3)
console.log(Game.status());

```


### Install
`npm install --save oop-chess`
