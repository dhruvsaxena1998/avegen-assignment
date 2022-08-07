import React from 'react';
import {Image, Dimensions, View, StyleSheet} from 'react-native';
import {Constants} from '../config/constants';

import type {Color, Square, Type} from '../types/chess';

type PieceType = `${Color}${Type}`;
type Pieces = Record<PieceType, any>;

const {width} = Dimensions.get('window');
export const SIZE = width / 8;

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

interface PieceProps {
  piece: {
    type: Type | null;
    color: Color | null;
    square: Square | null;
  } | null;
  position: {
    x: number;
    y: number;
  };
}

export const Piece: React.FC<PieceProps> = ({piece, position}) => {
  const translateX = position.x * SIZE;
  const translateY = position.y * SIZE;

  const styles = useStyles(translateX, translateY);

  if (!piece) {
    return null;
  }

  const {color, type} = piece;
  const image = `${color}${type}` as keyof typeof PIECES;
  return (
    <View style={styles.piece}>
      <Image
        source={PIECES[image]}
        style={{
          height: Constants.chessPieceSize,
          width: Constants.chessPieceSize,
        }}
      />
    </View>
  );
};

const useStyles = (x: number, y: number) =>
  StyleSheet.create({
    piece: {
      position: 'absolute',
      transform: [
        {translateX: x + Constants.padding},
        {translateY: y + Constants.padding},
      ],
    },
  });
