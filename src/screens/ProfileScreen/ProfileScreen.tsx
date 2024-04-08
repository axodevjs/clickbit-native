import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CopyIcon from '../../assets/icons/CopyIcon';
import LeftArrow from '../../assets/icons/LeftArrow';
import RightArrow from '../../assets/icons/RightArrow';
import ProfileCirle from '../../components/ProfileCirle/ProfileCirle';
import SettingItem from '../../components/SettingItem/SettingItem';
import BorderData from '../../components/ui/BorderData/BorderData';
import Switch from '../../components/ui/Switch/Switch';
import {styles} from './styles';

const ProfileScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={{width: '100%'}}>
        <LinearGradient
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={[styles.header]}
          colors={['#FF4D00', '#FFA800']}>
          <Pressable
            onPress={() => navigation.navigate('Earn')}
            style={styles.backContainer}>
            <LeftArrow />
            <Text style={styles.backText}>Back</Text>
          </Pressable>
          <View style={styles.user}>
            <ProfileCirle size="big" />
            <View style={styles.userData}>
              <Text style={styles.username}>ClickBit User Lv.0</Text>
              <Text style={styles.email}>example@mail.ru</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.settings}>
          <SettingItem
            text="Referals"
            onPress={() => {}}
            rightComponent={<RightArrow />}
          />
          <SettingItem
            text="Referal code"
            onPress={() => {}}
            rightComponent={
              <Pressable onPress={() => {}}>
                <BorderData>
                  <>
                    <Text style={styles.text}>Copy</Text>
                    <CopyIcon />
                  </>
                </BorderData>
              </Pressable>
            }
          />
          <SettingItem
            text="Total points earned"
            onPress={() => {}}
            rightComponent={
              <Pressable onPress={() => {}}>
                <BorderData>
                  <>
                    <Text style={styles.text}>1.000.000</Text>
                  </>
                </BorderData>
              </Pressable>
            }
          />
          <SettingItem
            text="Sound"
            onPress={() => {}}
            rightComponent={<Switch />}
          />
          <SettingItem
            text="Google Authenticator"
            onPress={() => {}}
            rightComponent={<RightArrow />}
          />
          <SettingItem
            text="Language"
            onPress={() => {}}
            rightComponent={
              <Pressable onPress={() => {}}>
                <BorderData>
                  <>
                    <Text style={styles.text}>En</Text>
                  </>
                </BorderData>
              </Pressable>
            }
          />
        </View>
      </View>

      <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default ProfileScreen;
