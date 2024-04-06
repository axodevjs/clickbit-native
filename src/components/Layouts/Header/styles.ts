import {StyleSheet} from 'react-native';
import {COLORS} from '../../../utils/colors';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    flex: 0,
    width: '100%',
  },
  stats: {
    paddingHorizontal: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.gray,
    gap: 18,
    width: '86%',
  },
  balance: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  balanceText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'proximanova_regular',
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: '#4E4949',
  },
});
