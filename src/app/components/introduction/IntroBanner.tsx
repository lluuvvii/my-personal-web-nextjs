'use client'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import ZigzagContainer from '../materials/ZigzagContainer'

const IntroBanner = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      {matches ?
        <Box sx={{ transform: 'rotate(-2deg) scale(1.03)', width: '100%', position: 'relative', left: '-17px', height: 0 }}>
          <Box sx={{ transform: 'scale(1.05)' }}>
            <ZigzagContainer width='100%' height='300px' color='red' toColor='#d10000' toGradient='45deg' top bottom right left />
          </Box>
          {/* bottom left side particles */}
          {/* striped circle */}
          {/* <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
          </Box> */}
          {/* circle */}
          {/* <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'black',
              top: '180px',
              left: '-30px',
            }}
          >
          </Box>
          <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'linear-gradient(135deg, white 50%, grey 50%)',
              // backgroundColor: 'white',
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
                background: 'linear-gradient(135deg, red 50%, darkred 50%)',
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
              }}
            >
            </Box>
          </Box> */}
          {/* <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: '20px outset white',
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
                border: '10px ridge red',
              }}
            ></Box>
          </Box> */}
          {/* clip path particles */}
          <Box
            sx={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              backgroundColor: 'black',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              clipPath: 'polygon(0% 16%, 10% 12%, 9% 14%, 6% 17%, 26% 13%, 33% 12%, 34% 14%, 32% 17%, 13% 24%, 22% 22%, 34% 19%, 38% 19%, 38% 20%, 42% 19%, 50% 15%, 56% 14%, 56% 15%, 55% 17%, 53% 18%, 57% 18%, 56% 20%, 52% 22%, 28% 30%, 37% 30%, 50% 28%, 50% 30%, 34% 40%, 47% 37%, 58% 35%, 74% 28%, 76% 30%, 69% 34%, 81% 29%, 79% 33%, 73% 36%, 39% 50%, 25% 60%, 43% 56%, 37% 62%, 21% 74%, 22% 85%, 8% 92%, 15% 90%, 0% 97%)',
              top: '50px',
              left: '-15px'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '290px',
              height: '290px',
              backgroundColor: 'white',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              clipPath: 'polygon(0% 16%, 10% 12%, 9% 14%, 6% 17%, 26% 13%, 33% 12%, 34% 14%, 32% 17%, 13% 24%, 22% 22%, 34% 19%, 38% 19%, 38% 20%, 42% 19%, 50% 15%, 56% 14%, 56% 15%, 55% 17%, 53% 18%, 57% 18%, 56% 20%, 52% 22%, 28% 30%, 37% 30%, 50% 28%, 50% 30%, 34% 40%, 47% 37%, 58% 35%, 74% 28%, 76% 30%, 69% 34%, 81% 29%, 79% 33%, 73% 36%, 39% 50%, 25% 60%, 43% 56%, 37% 62%, 21% 74%, 22% 85%, 8% 92%, 15% 90%, 0% 97%)',
              top: '70px',
              left: '-40px'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              width: '200px',
              height: '200px',
              backgroundColor: 'red',
              filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
              clipPath: 'polygon(0 12%, 13% 6%, 15% 7%, 10% 10%, 7% 14%, 26% 8%, 33% 6%, 27% 11%, 20% 16%, 42% 6%, 40% 11%, 40% 14%, 33% 19%, 38% 18%, 50% 14%, 56% 14%, 56% 15%, 21% 33%, 52% 24%, 47% 27%, 79% 23%, 83% 25%, 74% 29%, 85% 26%, 90% 28%, 77% 39%, 75% 43%, 74% 45%, 49% 56%, 52% 58%, 49% 61%, 15% 71%, 33% 69%, 29% 72%, 37% 70%, 40% 71%, 43% 73%, 13% 86%, 25% 93%, 26% 96%, 12% 92%, 14% 96%, 13% 99%, 0 93%)',
              top: '100px',
              left: '-35px'
            }}
          />
          {/* striped circle */}
          {/* <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
          </Box> */}
          {/* top right side particles */}
          {/* star long shadow */}
          <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
              right: '-80px',
            }}
          >
          </Box>
          {/* striped circle */}
          <Box
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            component={motion.div}
            drag
            sx={{
              cursor: 'pointer',
              transform: 'scale(1.2)',
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
            variant='h3'
            sx={{
              position: 'absolute',
              top: '-30px',
              right: '30px',
              textAlign: 'center',
              fontFamily: 'Nunito, Arial, sans-serif',
              fontWeight: 600,
              color: 'white',
              textShadow: `
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1), 
              0px 1.5px 5px rgba(0,0,0,1)`
            }}>
            Introduction
          </Typography>
        </Box>
        : null}
    </>
  )
}

export default IntroBanner