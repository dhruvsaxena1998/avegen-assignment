import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Colors} from '../config/constants';

const WHITE = Colors.white;
const BLACK = Colors.black;

export interface RowProps {
  row: number;
}

export interface SquareProps extends RowProps {
  column: number;
}

const {width} = Dimensions.get('window');
export const Square: React.FC<SquareProps> = ({row, column}) => {
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor = (column + offset) % 2 === 0 ? BLACK : WHITE;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 4,
        justifyContent: 'space-between',
      }}>
      <Text style={{fontWeight: '900', opacity: column === 0 ? 1 : 0}}>{`${
        8 - row
      }`}</Text>
      <Text
        style={{
          fontWeight: '900',
          opacity: row === 7 ? 1 : 0,
          alignSelf: 'flex-end',
        }}>
        {String.fromCharCode('a'.charCodeAt(0) + column).toUpperCase()}
      </Text>
      {/* <Text
        style={{
          fontWeight: '500',
          color,
          alignSelf: 'flex-end',
          opacity: row === 7 ? 1 : 0,
        }}>
        {String.fromCharCode('a'.charCodeAt(0) + column).toUpperCase()}
      </Text> */}
    </View>
  );
};

export const Row: React.FC<RowProps> = ({row}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {Array(8)
        .fill(true)
        .map((_, column) => (
          <Square key={column} row={row} column={column} />
        ))}
    </View>
  );
};

export const Board: React.FC<{opening: any}> = () => {
  return (
    <View style={{width, height: width}}>
      {Array(8)
        .fill(true)
        .map((_, row) => (
          <Row key={row} row={row} />
        ))}
    </View>
  );
};
