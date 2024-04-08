import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import SolanaIcon from '../../../assets/icons/SolanaIcon';
import WalletIcon from '../../../assets/icons/WalletIcon';
import ProfileCirle from '../../ProfileCirle/ProfileCirle';
import CP from '../../ui/CP/CP';
import CT from '../../ui/CT/CT';
import {styles} from './styles';

const Header = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <ProfileCirle />
      </Pressable>

      <View style={styles.stats}>
        <View style={styles.balance}>
          <CP />
          <Text style={styles.balanceText}>1000</Text>
        </View>
        <View style={styles.balance}>
          <CT />
          <Text style={styles.balanceText}>1000</Text>
        </View>
        <View style={styles.balance}>
          <SolanaIcon width={22} height={18} color="#fff" />
          <Text style={styles.balanceText}>1000</Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.balance}>
          <WalletIcon width={24} height={24} color="#fff" />
        </View>
      </View>
    </View>
  );
};

export default Header;
