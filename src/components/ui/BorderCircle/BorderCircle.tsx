import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

interface Props {
  children: ReactNode;
  width: any;
  height?: number;
}
const BorderCirle: FC<Props> = ({children, width, height}) => {
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
        style={[
          styles.gradient,
          {width: width, height: height || width, borderRadius: width},
        ]}
        colors={['#FF4D00', '#FFA800']}>
        <View style={[styles.inner, {width, height}]}>{children}</View>
      </LinearGradient>
    </DropShadow>
  );
};

export default BorderCirle;
