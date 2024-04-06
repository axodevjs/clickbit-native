import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';
import {FONTS} from '../../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: FONTS.PR,
    color: 'white',
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 47,
    paddingHorizontal: 16,
    backgroundColor: COLORS.darkGray,
    borderRadius: 8,
    color: 'white',
    fontFamily: FONTS.PR,
    fontSize: 16,
  },
  rightIconContainer: {
    position: 'absolute',
    right: 15,
    top: '50%',
    transform: [{translateY: -12}], // Центрируем иконку по вертикали
  },
});
