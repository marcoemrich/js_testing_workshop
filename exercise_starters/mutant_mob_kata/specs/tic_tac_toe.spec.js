import { TicTacToe, Line } from "../src/tic_tac_toe";

describe('TicTacToe', () => {

  test('constructor should set the width', () => {
    const ticTacToe = new TicTacToe([], 3);
    expect(ticTacToe.width).toEqual(3)
  })

  test('constructor player should set to X as default', () => {
    const ticTacToe = new TicTacToe([], 3);
    expect(ticTacToe.currentPlayer).toEqual("X")
  })



});