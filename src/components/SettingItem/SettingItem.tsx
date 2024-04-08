import React, {FC, ReactNode} from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  text: string;
  rightComponent: ReactNode;
  onPress: () => void;
}

const SettingItem: FC<Props> = ({text, rightComponent, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightComponent}
    </Pressable>
  );
};

export default SettingItem;
