import React, {FC, ReactNode} from 'react';
import {ScrollView, View} from 'react-native';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import {MainLayoutStyles} from './styles';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <View style={MainLayoutStyles.container}>
      <Header />
      <ScrollView horizontal={false}>{children}</ScrollView>
      <Footer />
    </View>
  );
};

export default MainLayout;
