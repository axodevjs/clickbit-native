import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    borderRadius: 12,
    paddingHorizontal: 20,
    backgroundColor: COLORS.gray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: FONTS.PB,
    fontSize: 17,
    color: 'white',
  },
});
