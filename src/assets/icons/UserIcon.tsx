import React, {FC} from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

interface UserIconProps {
  width: number;
}

const UserIcon: FC<UserIconProps> = ({width}) => {
  const height = width * (24 / 24);

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="6" r="4" fill="white" />
      <Path
        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
        fill="white"
      />
    </Svg>
  );
};

export default UserIcon;
