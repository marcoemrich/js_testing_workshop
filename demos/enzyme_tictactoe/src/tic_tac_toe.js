import React from 'react'
import * as R from 'ramda'

const mapIndexed = R.addIndex(R.map);

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.state = {
      content: TicTacToe.newEmpty(props.x, props.y)
    };
  }

  handleCellClick(e) {
    this.setState({
      content: this.state.content.mark(
        Number(e.target.dataset["cellNr"]))
    });
  }

  render() {
    return <div className="board">
      {
        mapIndexed((cellContent, i) =>
          <Cell
            key={i}
            cellNr={i}
            onClick={this.handleCellClick}
            owner={cellContent}
          />
          , this.state.content.fields)
      }
    </div>;
  }
}

export const Cell = function Cell({ owner = '', cellNr, onClick } = { owner: '' }) {
  return <button
    className={`cell cell_${cellNr}`}
    data-cell-nr={cellNr}
    onClick={onClick}>
    {owner}
  </button>
}

export class TicTacToe {
  constructor(fields, currentPlayer = 'X') {
    this.fields = fields;
    this.currentPlayer = currentPlayer;
  };

  static newEmpty(width, height) {
    return new TicTacToe(Array(width * height).fill(" "));
  }

  toString() { return this.fields.join('') };

  oppositePlayer(player) {
    return player === 'X' ? 'O' : 'X';
  }

  mark(cellNr) {
    if (R.nth(cellNr, this.fields) !== ' ') return this;

    return new TicTacToe(
      R.update(cellNr, this.currentPlayer, this.fields),
      this.oppositePlayer(this.currentPlayer)
    );
  }
}