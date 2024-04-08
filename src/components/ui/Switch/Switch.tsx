import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const Switch = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.container}
      colors={['#FF4D00', '#FFA800']}>
      <View style={styles.circle} />
    </LinearGradient>
  );
};

export default Switch;
