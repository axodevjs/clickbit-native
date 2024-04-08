import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import MainNavigator from './src/navigation/MainNavigator';
import {COLORS} from './src/utils/colors';

function App() {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.darkGray} />
      <View style={styles.backgroundStyle}>
        <MainNavigator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: COLORS.darkGray,
    width: '100%',
    height: '100%',
    color: '#fff',
    flex: 1,
  },
});

export default App;
