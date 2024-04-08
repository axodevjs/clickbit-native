import {GradientBorderView} from '@good-react-native/gradient-border';
import React, {FC, ReactNode} from 'react';
import {styles} from './styles';

interface Props {
  children: ReactNode;
}

const BorderData: FC<Props> = ({children}) => {
  return (
    <GradientBorderView
      gradientProps={{
        colors: ['#FF4D00', '#FFA800'],
        start: {x: 0, y: 0.5},
        end: {x: 1, y: 0.5},
      }}
      style={styles.container}>
      {children}
    </GradientBorderView>
  );
};

export default BorderData;
