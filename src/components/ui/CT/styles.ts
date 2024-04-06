import {Platform, StyleSheet} from 'react-native';
import {FONTS} from '../../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#FF7A00',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  gradient: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontFamily: FONTS.RFDB,
    color: '#FFF',
  },
});
