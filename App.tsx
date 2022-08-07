import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Board} from './src/components/Board';
import {Piece} from './src/components/Piece';
import {Colors, Constants} from './src/config/constants';

import {Chess} from './src/lib/chess';
import {Square} from './src/types/chess';

const chess = new Chess();

interface Opening {
  name: string;
  move: {
    from: Square;
    to: Square;
  };
}
const Openings: Array<Opening> = [
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

const App = () => {
  const [board, setBoard] = useState(chess.getBoard());
  const [opening, setOpening] = useState<Opening | null>(null);

  const handleChessOpening = () => {
    // reset board first before opening
    handleReset();

    const random = Math.floor(Math.random() * Openings.length);
    const openingMove = Openings[random];

    setOpening(openingMove);
    setBoard(chess.move(openingMove.move.from, openingMove.move.to).getBoard());
  };

  const handleReset = () => {
    setBoard(chess.reset().getBoard());
    setOpening(null);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar barStyle={'light-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.wrapper}>
          <Board opening={opening} />

          {board.rows.map((row, y) =>
            row.map((piece, x) => (
              <Piece key={`${x + y}`} piece={piece} position={{x, y}} />
            )),
          )}

          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleChessOpening}>
              <Text style={styles.text}>Random Opening</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleReset}>
              <Text style={styles.text}>Reset Board</Text>
            </TouchableOpacity>
          </View>

          {opening && (
            <View>
              <Text style={styles.text}>{opening?.name}</Text>
              <Text style={styles.text}>
                {`${opening?.move.from} ➜ ${opening?.move.to}`}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  wrapper: {
    width,
  },
  buttonGroup: {
    margin: Constants.margin,
    marginTop: Constants.margin * 2,
  },
  button: {
    backgroundColor: Colors.black,
    padding: Constants.padding,
    borderRadius: 10,
    marginBottom: Constants.margin,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default App;
