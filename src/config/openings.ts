import type {Square} from '../types/chess';

export interface Opening {
  name: string;
  move: {
    from: Square;
    to: Square;
  };
}

export const Openings: Array<Opening> = [
  {name: 'king-pawn-opening', move: {from: 'e2', to: 'e4'}},
  {
    name: 'queen-pawn-opening',
    move: {from: 'd2', to: 'd4'},
  },
  {
    name: 'reti-opening',
    move: {from: 'g1', to: 'f3'},
  },
  {
    name: 'english-opening',
    move: {from: 'c2', to: 'c4'},
  },
  {
    name: 'king-fianchetto',
    move: {from: 'g2', to: 'g3'},
  },
];
