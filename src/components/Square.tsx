import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Constants} from '../config/constants';
import type {SquareProps} from '../types/board';

export const Square: React.FC<SquareProps> = ({row, column}) => {
  const offset = row % 2 === 0 ? 1 : 0;
  const backgroundColor =
    (column + offset) % 2 === 0 ? Colors.black : Colors.white;

  const rowLabelOpacity = column === 0 ? 1 : 0;
  const colLabelOpacity = row === 7 ? 1 : 0;

  return (
    <View
      style={{
        ...styles.square,
        backgroundColor,
      }}>
      <Text style={{...styles.text, opacity: rowLabelOpacity}}>
        {`${8 - row}`}
      </Text>
      <Text
        style={{
          ...styles.text,
          ...styles.flexEnd,
          opacity: colLabelOpacity,
        }}>
        {String.fromCharCode('a'.charCodeAt(0) + column).toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    padding: Constants.padding_sm,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '900',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
});
