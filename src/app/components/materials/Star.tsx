// components/Star.tsx
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const StarContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  '&:before': {
    content: '""',
    display: 'block',
    paddingBottom: '100%',
  },
  '& svg': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

interface StarProps {
  width: number;
  height: number;
  color: string;
}

const Star: React.FC<StarProps> = ({ width, height, color }) => {
  return (
    <StarContainer
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L14.09 8.26H20.54L15.18 11.74L17.27 18L12 14.52L6.73 18L8.82 11.74L3.46 8.26H9.91L12 2Z"
          fill={color}
          stroke="red"
          strokeWidth="2"
          style={{
            filter: 'drop-shadow(2px 2px 3px red)',
            border: '5px solid red',
            borderRadius: '5px'
          }}
        />
      </svg>
    </StarContainer>
  );
};

export default Star;
