import React from 'react';
import {Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const CT = () => {
  return (
    <DropShadow
      style={{
        shadowColor: '#FF7A00',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
      }}>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[styles.gradient, {width: 32, height: 20, borderRadius: 6}]}
        colors={['#FF4D00', '#FFA800']}>
        <Text style={styles.text}>CT</Text>
      </LinearGradient>
    </DropShadow>
  );
};

export default CT;
