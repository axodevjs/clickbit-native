import React, {FC, ReactNode} from 'react';
import {Pressable, Text, View} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import {FooterItemStyles} from './styles';

interface IFooterItem {
  name: string;
  icon: ReactNode;
  isActive: boolean;
  onPress: () => void;
}

const FooterItem: FC<IFooterItem> = ({name, icon, isActive, onPress}) => {
  return (
    <Pressable onPress={onPress} style={FooterItemStyles.container}>
      {isActive ? (
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
            colors={['#FF4D00', '#FFA800']}
            style={FooterItemStyles.activeIcon}>
            <View style={FooterItemStyles.iconContainer}>{icon}</View>
          </LinearGradient>
        </DropShadow>
      ) : (
        <View style={FooterItemStyles.icon}>{icon}</View>
      )}

      <Text style={[FooterItemStyles.name, {opacity: isActive ? 1 : 0.4}]}>
        {name}
      </Text>
    </Pressable>
  );
};

export default FooterItem;
