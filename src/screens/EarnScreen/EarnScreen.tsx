import React from 'react';
import {View} from 'react-native';
import MainLayout from '../../components/Layouts/MainLayout/MainLayout';
import LevelSlider from '../../components/LevelSlider/LevelSlider';
import Swap from '../../components/Swap/Swap';
import Button from '../../components/ui/Button/Button';

const EarnScreen = () => {
  return (
    <MainLayout>
      <LevelSlider />
      <Swap />
      <View style={{marginTop: 24, width: '100%'}}>
        <Button text="Tap to earn" type="primary" onPress={() => {}} />
      </View>
    </MainLayout>
  );
};

export default EarnScreen;
