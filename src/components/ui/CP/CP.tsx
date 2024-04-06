import React from 'react';
import {Text} from 'react-native';
import BorderCirle from '../BorderCircle/BorderCircle';
import {styles} from './styles';

const CP = () => {
  return (
    <BorderCirle width={24}>
      <Text style={styles.text}>CP</Text>
    </BorderCirle>
  );
};

export default CP;
