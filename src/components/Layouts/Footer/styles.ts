import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const FooterStyles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 85,
    width: 285,
    backgroundColor: COLORS.gray,
    gap: 31,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
