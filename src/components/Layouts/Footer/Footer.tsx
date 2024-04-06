import React from 'react';
import {View} from 'react-native';
import EarnIcon from '../../../assets/icons/EarnIcon';
import GamesIcon from '../../../assets/icons/GamesIcon';
import MarketplaceIcon from '../../../assets/icons/MarketplaceIcon';
import {useCurrentScreen} from '../../../contexts/CurrentScreenContext';
import FooterItem from './FooterItem/FooterItem';
import {FooterStyles} from './styles';

const Footer = () => {
  const {currentScreenName} = useCurrentScreen();

  return (
    <View style={FooterStyles.container}>
      <View style={FooterStyles.footer}>
        <FooterItem
          name="Earn"
          icon={<EarnIcon color="#fff" />}
          isActive={currentScreenName === 'Earn'}
          onPress={() => {}}
        />
        <FooterItem
          name="Marketplace"
          icon={<MarketplaceIcon color="#fff" />}
          isActive={currentScreenName === 'Marketplace'}
          onPress={() => {}}
        />
        <FooterItem
          name="Games"
          icon={<GamesIcon color="#fff" />}
          isActive={currentScreenName === 'Games'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Footer;
