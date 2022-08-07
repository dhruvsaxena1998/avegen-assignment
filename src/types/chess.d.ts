export type Color = 'b' | 'w';
export type Type = 'r' | 'n' | 'b' | 'q' | 'k' | 'p';

type KeysAlpha = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';
type KeysNums = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type Square = `${KeysAlpha}${KeysNums}`;

type Row = {
  color: Color | null;
  type: Type | null;
  square: Square | null;
};
type Rows = Array<Array<Row>>;

export interface Board {
  rows: Rows;
}
