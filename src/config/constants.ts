import type {Pieces} from '../types/piece';

export const Constants = {
  padding: 10,
  margin: 10,

  chessPieceSize: 30,
};

export const Colors = {
  background: '#062C30',

  white: '#ace8cf',
  black: '#1ca36c',
};

export const PIECES: Pieces = {
  br: require('../assets/images/v2/br.png'),
  bp: require('../assets/images/v2/bp.png'),
  bn: require('../assets/images/v2/bn.png'),
  bb: require('../assets/images/v2/bb.png'),
  bq: require('../assets/images/v2/bq.png'),
  bk: require('../assets/images/v2/bk.png'),
  wr: require('../assets/images/v2/wr.png'),
  wn: require('../assets/images/v2/wn.png'),
  wb: require('../assets/images/v2/wb.png'),
  wq: require('../assets/images/v2/wq.png'),
  wk: require('../assets/images/v2/wk.png'),
  wp: require('../assets/images/v2/wp.png'),
};
