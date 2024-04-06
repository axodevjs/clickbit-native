import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

interface RightArrowProps {
  width?: number;
  height?: number;
  color?: string;
}

const RightArrow: FC<RightArrowProps> = ({
  width = 20,
  height = 20,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.40001 4.40002L12.2 10L7.40001 15.6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default RightArrow;
