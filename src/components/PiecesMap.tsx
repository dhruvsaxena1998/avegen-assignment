import React from 'react';
import {Piece} from './Piece';

import type {Board} from '../types/chess';
import {View} from 'react-native';

export interface PiecesMapProps {
  board: Board;
}

export const PiecesMap: React.FC<PiecesMapProps> = ({board}) => {
  return (
    <View>
      {board.rows.map((row, y) =>
        row.map((piece, x) => (
          <Piece key={`${x + y}`} piece={piece} position={{x, y}} />
        )),
      )}
    </View>
  );
};
