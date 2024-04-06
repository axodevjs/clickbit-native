import {StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/fontNames';

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 1,
    width: '99.2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
  },
  buttonText: {
    fontFamily: FONTS.PB,
    color: '#fff',
    fontSize: 17,
  },
  gradient: {
    backgroundColor: '#262323',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
