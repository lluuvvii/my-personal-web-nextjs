'use client'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ZigzagContainer from '../materials/ZigzagContainer'

const IntroBanner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      {matches ?
        <Box sx={{ transform: 'rotate(-2deg) scale(1.03)', width: '100%', position: 'relative', left: '-17px', height: 0 }}>
          <Box sx={{ transform: 'scale(1.05)' }}>
            <ZigzagContainer width='100%' height='300px' color='red' toColor='#d10000' toGradient='to right' top bottom right left />
          </Box>
          {/* bottom left side particles */}
          {/* striped circle */}
          <Box
            sx={{
              position: 'absolute',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'repeating-linear-gradient(45deg, black, black, 6px, transparent 6px, transparent 11px)',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              top: '150px',
              left: '-20px',
            }}>
          </Box>
          {/* circle */}
          <Box
            sx={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              top: '180px',
              left: '-50px',
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
              backgroundColor: 'white',
              top: '170px',
              left: '-30px',
            }}
          >
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
              }}
            >
            </Box>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: '20px solid white',
              top: '200px',
              left: '-50px',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: '10px solid red',
              }}
            ></Box>
          </Box>
          {/* striped circle */}
          <Box
            sx={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'repeating-linear-gradient(45deg, black, black, 8px, transparent 8px, transparent 15px)',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              top: '240px',
              left: '0px',
            }}>
          </Box>
          {/* top right side particles */}
          {/* star long shadow */}
          <Box
            sx={{
              position: 'absolute',
              '& svg': {
                filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
              },
              top: '-15px',
              right: '60px'
            }}
          >
            <div style={{ transform: 'scale(0.12) rotate(315deg)', width: '1px', height: '1px' }}>
              <svg
                width='200px'
                height='1000px'
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
              position: 'absolute',
              '& svg': {
                filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
              },
              top: '20px',
              right: '60px'
            }}
          >
            <div style={{ transform: 'scale(0.12) rotate(315deg)', width: '1px', height: '1px' }}>
              <svg
                width='200px'
                height='1000px'
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
              position: 'absolute',
              '& svg': {
                filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
              },
              top: '45px',
              right: '70px'
            }}
          >
            <div style={{ transform: 'scale(0.1) rotate(315deg)', width: '1px', height: '1px' }}>
              <svg
                width='200px'
                height='1000px'
                fill={'black'}
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect x='0' y='80' width='100%' height='100%' fill={'black'} />
                <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' />
                <path d='M100 0.587l30.52 66.76L200 81.25l-50 48.5L161.92 200 100 165.83 38.08 200 50 129.75 0 81.25l69.44-13.29z' transform='scale(0.7) translate(42.5, 47)' fill='white' />
              </svg>
            </div>
          </Box>
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
              top: '70px',
              right: '-30px',
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
              backgroundColor: 'black',
              top: '50px',
              right: '10px',
            }}
          >
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              border: '10px solid red',
              top: '-10px',
              right: '-70px',
            }}
          >
          </Box>
          {/* striped circle */}
          <Box
            sx={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'repeating-linear-gradient(45deg, white, white, 8px, transparent 8px, transparent 15px)',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              top: '40px',
              right: '-40px',
            }}>
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
              background: 'repeating-linear-gradient(45deg, red, red, 5px, transparent 5px, transparent 9px)',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              top: '110px',
              right: '-30px',
            }}>
          </Box>
          <Typography
            variant='h4'
            sx={{
              position: 'absolute',
              top: '-20px',
              right: '30px',
              textAlign: 'center',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 600,
              color: 'white',
              textShadow: `
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1), 
              0px 1.5px 3px rgba(0,0,0,1)`
            }}>
            Introduction
          </Typography>
        </Box>
        : null}
    </>
  )
}

export default IntroBanner