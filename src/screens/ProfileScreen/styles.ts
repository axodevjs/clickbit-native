import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.darkGray,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {},
  header: {
    width: '100%',
    borderBottomRightRadius: 32,
    borderBottomLeftRadius: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  backContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    marginTop: 4,
  },
  backText: {
    fontFamily: FONTS.PB,
    fontSize: 16,
    color: 'white',
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  userData: {
    marginTop: 4,
    display: 'flex',
    gap: 2,
    flexDirection: 'column',
  },
  username: {
    fontFamily: FONTS.PB,
    fontSize: 24,
    color: 'white',
  },
  email: {
    fontFamily: FONTS.PB,
    fontSize: 18,
    color: 'white',
  },
  settings: {
    display: 'flex',
    gap: 12,
    marginTop: 15,
    paddingHorizontal: 12,
  },
  text: {
    fontFamily: FONTS.PR,
    fontSize: 15,
    color: 'white',
  },
  logo: {
    width: 120,
    height: 29,
    marginBottom: 50,
  },
});
