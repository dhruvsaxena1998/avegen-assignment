import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Square} from './Square';

import type {RowProps} from '../types/board';

export const Row: React.FC<RowProps> = ({row}) => {
  return (
    <View style={styles.row}>
      {Array(8)
        .fill(true)
        .map((_, column) => (
          <Square key={column} row={row} column={column} />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});
