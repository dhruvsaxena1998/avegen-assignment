import type {Color, Row, Type} from './chess';

export type PieceType = `${Color}${Type}`;
export type Pieces = Record<PieceType, any>;

export type Piece = Row;
