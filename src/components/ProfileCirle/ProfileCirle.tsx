import React from 'react';
import {View} from 'react-native';
import UserIcon from '../../assets/icons/UserIcon';
import {styles} from './styles';

const ProfileCirle = () => {
  return (
    <View style={styles.circle}>
      <UserIcon width={24} />
    </View>
  );
};

export default ProfileCirle;
