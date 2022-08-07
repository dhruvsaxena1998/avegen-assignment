import __cloneDeep from 'lodash/cloneDeep';
import {board} from './board';

import type {Square, Rows} from '../types/chess';

export class Chess {
  private board;

  constructor() {
    this.board = __cloneDeep(board);
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
    this.board = __cloneDeep(board);
    return this;
  }

  getBoard() {
    return this.board;
  }
}
