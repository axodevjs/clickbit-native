import React, {Dispatch, FC} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';

interface Props {
  value: string;
  setValue: Dispatch<string>;
  label?: string;
  rightIcon?: JSX.Element;
}

const Input: FC<Props> = ({value, setValue, label, rightIcon}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />
        {rightIcon && (
          <View style={styles.rightIconContainer}>{rightIcon}</View>
        )}
      </View>
    </View>
  );
};

export default Input;
