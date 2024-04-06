import React from 'react';
import {Text, View} from 'react-native';
import SolanaIcon from '../../../assets/icons/SolanaIcon';
import WalletIcon from '../../../assets/icons/WalletIcon';
import ProfileCirle from '../../ProfileCirle/ProfileCirle';
import CP from '../../ui/CP/CP';
import CT from '../../ui/CT/CT';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <ProfileCirle />
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
