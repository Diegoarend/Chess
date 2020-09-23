Chess API
----------------

This  project has an API to get all the possible moves from a piece(for now just the Knight Piece) in a certain position and also a back-end chess engine made with OOP(in progress).

Example: To get all the movements of a knight piece in 'D5' just make a get request to '/moves/D5'

Extra functionalities can be easily implemented given the abstraction of the logic used .


### Usage

#### Example code of the MovesController

Right now where instantiating numerous entities in each request for the purpose of forecating one position, but that also can be easily changed

```javascript
class MovesController {
  get(req, res) {
    const { square } = req.params;
    const board = new Board();
    const position = new Position(square);
    const knight = new Knight(position);
    board.setAtPosition(knight.position.x, knight.position.y, knight);
    const allMoves = board.getAllMovesFromPiece(
      knight.position.x,
      knight.position.y
    );
    const alphaNum = board.getAlphaNumeric(allMoves);
    return res.send(alphaNum);
  }
}

export default MovesController;


### Install
`npm install @babel/node`
### Run - Make sure your por port 3000 is free
`npm run start:dev`


Para contribuir sugiro seguir este tutorial:
//github.com/firstcontributions/first-contributions/blob/master/translations/README.pt_br.md
