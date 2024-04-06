import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

interface Props {
  color: string;
}

const EarnIcon: React.FC<Props> = ({color}) => {
  return (
    <View style={styles.container}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M8.25 5.00055C5.93257 5.00586 4.69253 5.06286 3.77772 5.67412C3.34096 5.96596 2.96596 6.34096 2.67412 6.77772C2 7.78661 2 9.19108 2 12C2 14.8089 2 16.2134 2.67412 17.2223C2.96596 17.659 3.34096 18.034 3.77772 18.3259C4.69253 18.9371 5.93258 18.9941 8.25 18.9995V14.9055C6.95608 14.5725 6 13.3979 6 12C6 10.6021 6.95608 9.42755 8.25 9.09451V5.00055Z"
          fill={color}
        />
        <Path d="M9.75 19L14.25 19V5H9.75V19Z" fill={color} />
        <Path
          d="M15.75 5.00055V9.09451C17.0439 9.42755 18 10.6021 18 12C18 13.3979 17.0439 14.5725 15.75 14.9055V18.9995C18.0674 18.9941 19.3075 18.9371 20.2223 18.3259C20.659 18.034 21.034 17.659 21.3259 17.2223C22 16.2134 22 14.8089 22 12C22 9.19107 22 7.78661 21.3259 6.77772C21.034 6.34096 20.659 5.96595 20.2223 5.67412C19.3075 5.06286 18.0674 5.00586 15.75 5.00055Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});

export default EarnIcon;
