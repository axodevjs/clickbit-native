import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

interface LeftArrowProps {
  width?: number;
  height?: number;
  color?: string;
}

const LeftArrow: FC<LeftArrowProps> = ({
  width = 20,
  height = 20,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M12.6 4.40002L7.79999 10L12.6 15.6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LeftArrow;
