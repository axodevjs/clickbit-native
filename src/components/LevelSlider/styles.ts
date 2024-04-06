import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/colors';
import {FONTS} from '../../utils/fontNames';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 212,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 17,
    borderRadius: 24,
    backgroundColor: COLORS.gray,
    marginTop: 12,
    position: 'relative',
  },
  levelName: {
    fontFamily: FONTS.RFDB,
    fontSize: 17,
    color: '#fff',
  },
  controls: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftArrowContainer: {
    position: 'absolute',
    left: 0,
    transform: [{translateY: -12}],
  },
  rightArrowContainer: {
    position: 'absolute',
    right: 0,
    transform: [{translateY: -12}],
  },
  image: {
    position: 'absolute',
    bottom: 0,
    width: 231,
    height: 153,
  },
});
