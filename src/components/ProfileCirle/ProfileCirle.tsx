import React, {FC} from 'react';
import {View} from 'react-native';
import UserIcon from '../../assets/icons/UserIcon';
import {styles} from './styles';

interface Props {
  size?: 'big' | 'small';
}

const ProfileCirle: FC<Props> = ({size = 'small'}) => {
  return (
    <View
      style={[
        styles.circle,
        {width: size === 'big' ? 67 : 40},
        {height: size === 'big' ? 67 : 40},
      ]}>
      <UserIcon width={size === 'big' ? 36 : 24} />
    </View>
  );
};

export default ProfileCirle;
