import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../utils/colors';
import {styles} from './styles';

interface Props {
  type: 'outlined' | 'primary';
  text: string;
  onPress: () => void;
}

const Button: FC<Props> = ({type, text, onPress}) => {
  return (
    <>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[styles.gradient, {width: '100%', height: 50, borderRadius: 12}]}
        colors={['#FF4D00', '#FFA800']}>
        <Pressable
          style={[
            styles.button,
            {
              backgroundColor: type === 'outlined' ? COLORS.gray : undefined,
            },
          ]}
          onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
      </LinearGradient>
    </>
  );
};

export default Button;
