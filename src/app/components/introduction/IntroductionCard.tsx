'use client'

import React from 'react'
import { Box } from '@mui/material'
import IntroCardContents from './IntroCardContents'
import { motion } from 'framer-motion'

const IntroductionCard = () => {
  return (
    <Box position='relative'>
      {/* top left particles */}
      {/* star long shadow */}
      <Box
        sx={{
          position: 'absolute',
          '& svg': {
            filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
          },
          top: '-15px',
          left: '100px'
        }}
      >
        <div style={{ transform: 'scale(0.1) rotate(315deg)', width: '1px', height: '1px' }}>
          <svg
            width='200px'
            height='500px'
            fill={'red'}
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
          </svg>
        </div>
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
      {/* bottom right */}
      {/* circle */}
      <Box
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          bottom: '30px',
          right: '-40px',
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
          backgroundColor: 'red',
          bottom: '70px',
          right: '-15px',
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
          background: 'repeating-linear-gradient(45deg, yellow, yellow, 6px, transparent 6px, transparent 11px)',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          bottom: '25px',
          right: '-30px',
        }}>
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
          backgroundColor: 'black',
          bottom: '-30px',
          right: '20px',
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
          backgroundColor: 'red',
          bottom: '35px',
          right: '-15px',
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
          backgroundColor: 'yellow',
          bottom: '40px',
          right: '-10px',
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
          bottom: '-25px',
          right: '30px',
        }}>
      </Box>
      {/* spike */}
      <Box
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
          bottom: '0px',
          right: '-35px'
        }}
      >
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
          backgroundColor: 'red',
          bottom: '-20px',
          right: '-20px',
        }}
      >
      </Box>
      {/* star long shadow */}
      <Box
        sx={{
          position: 'absolute',
          '& svg': {
            filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
          },
          bottom: '-25px',
          right: '0px'
        }}
      >
        <div style={{ transform: 'scale(0.1) rotate(135deg)', width: '1px', height: '1px' }}>
          <svg
            width='200px'
            height='500px'
            fill={'red'}
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect x='0' y='80' width='100%' height='100%' fill={'red'} />
            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
            <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
          </svg>
        </div>
      </Box>
      <Box
        sx={{
          padding: '10px',
          height: '280px',
          background: 'linear-gradient(100deg, yellow, #ffc800)',
          borderRadius: '20px',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
        }}>
        {/* introcard contents */}
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
            backgroundColor: 'yellow',
            clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
            top: '-20px',
            left: '-20px'
          }}
        >
        </Box>
        {/* circle around */}
        <Box
          component={motion.div}
          sx={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            top: '-10px',
            left: '-10px',
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
        >
          {[...Array(10)].map((_, index) => {
            const angle = (index / 10) * (2 * Math.PI)
            const distance = 70 // Distance from the center circle
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance

            return (
              <Box
                key={index}
                sx={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'yellow',
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )
          })}
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
            border: '7px double #ffc800',
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