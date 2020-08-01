class MovesController {
  get(req, res) {
    const resp = [
      [2, 0],
      [2, 2],
      [1, 3],
    ];
    return res.send(resp);
  }
}

export default MovesController;
