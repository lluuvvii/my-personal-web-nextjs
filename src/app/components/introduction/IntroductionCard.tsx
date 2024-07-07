import React from 'react'
import { Box } from '@mui/material'
import IntroCardContents from './IntroCardContents'

const IntroductionCard = () => {
  return (
    <Box position='relative'>
      {/* striped circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, black, black, 6px, transparent 6px, transparent 11px)',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          top: '-25px',
          left: '40px',
        }}>
      </Box>
      {/* circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          top: '-10px',
          left: '-30px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          top: '30px',
          left: '-30px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          top: '40px',
          left: '-20px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          top: '-15px',
          left: '50px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
          top: '-35px',
          left: '-10px',
        }}
      >
      </Box>
      <Box
        sx={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'yellow',
          top: '-10px',
          left: '50px',
        }}
      >
      </Box>
      {/* striped circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, red, red, 6px, transparent 6px, transparent 11px)',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          top: '15px',
          left: '-30px',
        }}>
      </Box>
      <Box
        sx={{
          padding: '10px',
          height: '280px',
          background: 'linear-gradient(100deg, yellow, #ffc800)',
          borderRadius: '20px',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
        }}>
        <Box sx={{ position: 'relative', borderRadius: '10px', backgroundColor: 'white', padding: '10px', boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)' }}>
          <IntroCardContents />
        </Box>
        {/* striped circle */}
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'repeating-linear-gradient(45deg, yellow, yellow, 5px, transparent 5px, transparent 9px)',
            top: '-15px',
            left: '20px',
          }}
        >
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'repeating-linear-gradient(45deg, #ffc800, #ffc800,  5px, transparent 5px, transparent 9px)',
            bottom: '15px',
            right: '-20px',
          }}
        >
        </Box>
        {/* spike */}
        <Box
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            backgroundColor: 'yellow',
            clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
            top: '-20px',
            left: '-20px'
          }}
        >
        </Box>
        {/* circle */}
        <Box
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '7px solid #ffc800',
            bottom: '-15px',
            right: '-15px'
          }}
        >
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '7px solid yellow',
            top: '10px',
            left: '-20px'
          }}
        >
        </Box>
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffc800',
            bottom: '-15px',
            right: '20px',
          }}
        >
        </Box>
      </Box>
    </Box>
  )
}

export default IntroductionCard