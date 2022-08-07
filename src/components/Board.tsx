import React from 'react';
import {View, Dimensions} from 'react-native';

import {Row} from './Row';

const {width} = Dimensions.get('window');
export const Board: React.FC = () => {
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
