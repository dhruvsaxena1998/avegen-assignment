import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Chess} from './lib/chess';
import {Board} from './components/Board';
import {PieceComponent} from './components/Piece';
import {Opening, Openings} from './config/openings';

import {styles} from './App.style';

const chess = new Chess();

const App = () => {
  const [board, setBoard] = useState(chess.getBoard());
  const [opening, setOpening] = useState<Opening | null>(null);

  const handleChessOpening = () => {
    // reset board first before opening
    handleReset();

    const random = Math.floor(Math.random() * Openings.length);
    const openingMove = Openings[random];

    const move = chess.move(openingMove.move.from, openingMove.move.to);
    setOpening(openingMove);
    setBoard(move.getBoard());
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
              <PieceComponent
                key={`${x + y}`}
                piece={piece}
                position={{x, y}}
              />
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

export default App;
