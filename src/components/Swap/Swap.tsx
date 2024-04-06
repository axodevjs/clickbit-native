import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Button from '../ui/Button/Button';
import CP from '../ui/CP/CP';
import CT from '../ui/CT/CT';
import Input from '../ui/Input/Input';
import {styles} from './styles';

const Swap = () => {
  const [points, setPoints] = useState('100');
  const [tokens, setTokens] = useState('10.54');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SWAP</Text>
      <View style={styles.inputs}>
        <Input
          value={points}
          setValue={setPoints}
          label="CLICK points"
          rightIcon={<CP />}
        />
        <Input
          value={tokens}
          setValue={setTokens}
          label="CLICK Tokens"
          rightIcon={<CT />}
        />
        <Button text="SWAP" type="outlined" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Swap;
