import {Platform, StyleSheet} from 'react-native';

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
    backgroundColor: '#262323',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    borderRadius: 100,
    flex: 1,
    margin: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#262323',
    justifyContent: 'center',
  },
});
