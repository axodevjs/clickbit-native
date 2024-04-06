import React from 'react';
import {Image, Text, View} from 'react-native';
import LeftArrow from '../../assets/icons/LeftArrow';
import RightArrow from '../../assets/icons/RightArrow';
import BorderCirle from '../ui/BorderCircle/BorderCircle';
import {styles} from './styles';

const LevelSlider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.levelName}>LEVEL 1</Text>
      <View style={styles.controls}>
        <View style={styles.leftArrowContainer}>
          <BorderCirle width={32}>
            <View style={{marginRight: 3}}>
              <LeftArrow />
            </View>
          </BorderCirle>
        </View>
        <View style={styles.rightArrowContainer}>
          <BorderCirle width={32}>
            <View style={{marginLeft: 3}}>
              <RightArrow />
            </View>
          </BorderCirle>
        </View>
      </View>
      <Image
        style={styles.image}
        source={require('../../assets/images/level1.png')}
      />
    </View>
  );
};

export default LevelSlider;
