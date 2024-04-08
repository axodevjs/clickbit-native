import React, {FC} from 'react';
import {Path, Svg} from 'react-native-svg';

interface CopyIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CopyIcon: FC<CopyIconProps> = ({
  width = 18,
  height = 18,
  color = 'white',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
      <Path
        d="M4.5 8.25C4.5 6.12868 4.5 5.06802 5.15901 4.40901C5.81802 3.75 6.87868 3.75 9 3.75H11.25C13.3713 3.75 14.432 3.75 15.091 4.40901C15.75 5.06802 15.75 6.12868 15.75 8.25V12C15.75 14.1213 15.75 15.182 15.091 15.841C14.432 16.5 13.3713 16.5 11.25 16.5H9C6.87868 16.5 5.81802 16.5 5.15901 15.841C4.5 15.182 4.5 14.1213 4.5 12V8.25Z"
        stroke={color}
      />
      <Path
        d="M4.5 14.25C3.25736 14.25 2.25 13.2426 2.25 12V7.5C2.25 4.67157 2.25 3.25736 3.12868 2.37868C4.00736 1.5 5.42157 1.5 8.25 1.5H11.25C12.4926 1.5 13.5 2.50736 13.5 3.75"
        stroke={color}
      />
    </Svg>
  );
};

export default CopyIcon;
