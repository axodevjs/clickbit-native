import {Platform, StyleSheet} from 'react-native';
import {FONTS} from '../../../../utils/fontNames';

export const FooterItemStyles = StyleSheet.create({
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
  iconContainer: {
    borderRadius: 60,
    flex: 1,
    margin: 1,
    alignItems: 'center',
    backgroundColor: '#262323',
    justifyContent: 'center',
    width: 39,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: '#343131',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.2,
  },
  activeIcon: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: '#262323',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    color: '#fff',
    fontFamily: FONTS.PR,
  },
});
