import __cloneDeep from 'lodash/cloneDeep';

import type {Board, Square, Rows} from '../types/chess';

const StartingBoard: Board = {
  rows: [
    [
      {color: 'b', type: 'r', square: 'a8'},
      {color: 'b', type: 'n', square: 'b8'},
      {color: 'b', type: 'b', square: 'c8'},
      {color: 'b', type: 'q', square: 'd8'},
      {color: 'b', type: 'k', square: 'e8'},
      {color: 'b', type: 'b', square: 'f8'},
      {color: 'b', type: 'n', square: 'g8'},
      {color: 'b', type: 'r', square: 'h8'},
    ],
    [
      {color: 'b', type: 'p', square: 'a7'},
      {color: 'b', type: 'p', square: 'b7'},
      {color: 'b', type: 'p', square: 'c7'},
      {color: 'b', type: 'p', square: 'd7'},
      {color: 'b', type: 'p', square: 'e7'},
      {color: 'b', type: 'p', square: 'f7'},
      {color: 'b', type: 'p', square: 'g7'},
      {color: 'b', type: 'p', square: 'h7'},
    ],
    [
      {color: null, type: null, square: 'a6'},
      {color: null, type: null, square: 'b6'},
      {color: null, type: null, square: 'c6'},
      {color: null, type: null, square: 'd6'},
      {color: null, type: null, square: 'e6'},
      {color: null, type: null, square: 'f6'},
      {color: null, type: null, square: 'g6'},
      {color: null, type: null, square: 'h6'},
    ],
    [
      {color: null, type: null, square: 'a5'},
      {color: null, type: null, square: 'b5'},
      {color: null, type: null, square: 'c5'},
      {color: null, type: null, square: 'd5'},
      {color: null, type: null, square: 'e5'},
      {color: null, type: null, square: 'f5'},
      {color: null, type: null, square: 'g5'},
      {color: null, type: null, square: 'h5'},
    ],
    [
      {color: null, type: null, square: 'a4'},
      {color: null, type: null, square: 'b4'},
      {color: null, type: null, square: 'c4'},
      {color: null, type: null, square: 'd4'},
      {color: null, type: null, square: 'e4'},
      {color: null, type: null, square: 'f4'},
      {color: null, type: null, square: 'g4'},
      {color: null, type: null, square: 'h4'},
    ],
    [
      {color: null, type: null, square: 'a3'},
      {color: null, type: null, square: 'b3'},
      {color: null, type: null, square: 'c3'},
      {color: null, type: null, square: 'd3'},
      {color: null, type: null, square: 'e3'},
      {color: null, type: null, square: 'f3'},
      {color: null, type: null, square: 'g3'},
      {color: null, type: null, square: 'h3'},
    ],
    [
      {color: 'w', type: 'p', square: 'a2'},
      {color: 'w', type: 'p', square: 'b2'},
      {color: 'w', type: 'p', square: 'c2'},
      {color: 'w', type: 'p', square: 'd2'},
      {color: 'w', type: 'p', square: 'e2'},
      {color: 'w', type: 'p', square: 'f2'},
      {color: 'w', type: 'p', square: 'g2'},
      {color: 'w', type: 'p', square: 'h2'},
    ],
    [
      {color: 'w', type: 'r', square: 'a1'},
      {color: 'w', type: 'n', square: 'b1'},
      {color: 'w', type: 'b', square: 'c1'},
      {color: 'w', type: 'q', square: 'd1'},
      {color: 'w', type: 'k', square: 'e1'},
      {color: 'w', type: 'b', square: 'f1'},
      {color: 'w', type: 'n', square: 'g1'},
      {color: 'w', type: 'r', square: 'h1'},
    ],
  ],
};

export class Chess {
  private board;

  constructor() {
    this.board = StartingBoard;
  }

  private getRows() {
    return __cloneDeep(this.board.rows);
  }

  private getRowIndexFromSquare(square: Square): number {
    return 8 - +square.split('')[1];
  }

  private setRows(rows: Rows) {
    this.board = {
      ...this.board,
      rows: __cloneDeep(rows),
    };
    return this;
  }

  move(from: Square, to: Square) {
    const rows = this.getRows();

    const fromRowIndex = this.getRowIndexFromSquare(from);
    const toRowIndex = this.getRowIndexFromSquare(to);

    const fromRowData = rows[fromRowIndex];
    const toRowData = rows[toRowIndex];

    const fromSquareIndex = fromRowData.findIndex(item => item.square === from);
    const toSquareIndex = toRowData.findIndex(item => item.square === to);

    const fromSquareData = __cloneDeep(fromRowData[fromSquareIndex]);
    fromRowData[fromSquareIndex] = {...fromSquareData, type: null, color: null};

    toRowData[toSquareIndex] = {
      ...toRowData[toSquareIndex],
      type: fromSquareData.type,
      color: fromSquareData.color,
    };

    return this.setRows(rows);
  }

  reset() {
    this.board = StartingBoard;
    return this;
  }

  getBoard() {
    return this.board;
  }
}
