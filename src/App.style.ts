import {Dimensions, StyleSheet} from 'react-native';
import {Colors, Constants} from './config/constants';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
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
