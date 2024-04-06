import {StyleSheet} from 'react-native';
import {FONTS} from '../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262323',
    borderRadius: 24,
    paddingVertical: 17,
    paddingHorizontal: 12,
    marginTop: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.RFDB,
    fontSize: 17,
    color: '#fff',
  },
  inputs: {
    width: '100%',
    marginTop: 14,
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
  },
});
