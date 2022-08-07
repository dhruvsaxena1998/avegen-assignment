import React from 'react';
import {Image, Dimensions, View, StyleSheet} from 'react-native';
import {Constants, PIECES} from '../config/constants';

import type {Piece} from '../types/piece';

const {width} = Dimensions.get('window');
export const SIZE = width / 8;

interface PieceProps {
  piece: Piece | null;
  position: {
    x: number;
    y: number;
  };
}

export const PieceComponent: React.FC<PieceProps> = ({piece, position}) => {
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
