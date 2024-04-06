import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const MainLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: COLORS.darkGray,
  },
});
