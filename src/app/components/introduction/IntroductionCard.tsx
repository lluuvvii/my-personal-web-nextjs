'use client'

import React, { useState } from 'react'
import { Box } from '@mui/material'
import IntroCardContents from './IntroCardContents'
import { motion } from 'framer-motion'

const IntroductionCard = () => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };
  return (
    <Box
      position='relative'
      component={motion.div}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }}>
      {/* top left particles */}
      {/* star long shadow */}
      {/* <Box
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
      </Box> */}
      {/* striped circle */}
      {/* <Box
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
      </Box> */}
      {/* circle */}
      {/* <Box
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
          backgroundColor: 'white',
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
          backgroundColor: 'white',
          top: '-10px',
          left: '50px',
        }}
      >
      </Box> */}
      {/* striped circle */}
      {/* <Box
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
      </Box> */}
      {/* bottom right */}
      {/* circle */}
      {/* <Box
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
      </Box> */}
      {/* striped circle */}
      {/* <Box
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, white, white, 6px, transparent 6px, transparent 11px)',
          filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          bottom: '25px',
          right: '-30px',
        }}>
      </Box> */}
      {/* circle */}
      {/* <Box
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
          backgroundColor: 'white',
          bottom: '40px',
          right: '-10px',
        }}
      >
      </Box> */}
      {/* striped circle */}
      {/* <Box
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
      </Box> */}
      {/* spike */}
      {/* <Box
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
      </Box> */}
      {/* circle */}
      {/* <Box
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
      </Box> */}
      {/* star long shadow */}
      {/* <Box
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
      </Box> */}
      <Box
        sx={{
          perspective: '1000px',
          // position: 'relative',
          '& .inner': {
            transition: 'transform 0.5s',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(190deg)' : 'rotateY(10deg)',
          },
          '& .front, & .back': {
            backfaceVisibility: 'hidden',
          },
          '& .front': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            transform: 'rotateY(10deg)'
          },
          '& .back': {
            width: '100%',
            height: '100%',
            transform: 'rotateY(190deg)',
          },
        }}
      >
        <Box className="inner">
          <Box className='front'>
            <Box
              sx={{
                padding: '10px',
                // rotate: '-3deg',
                // py: '10px',
                // pr: '10px',
                // pl: '80px',
                background: 'linear-gradient(100deg, red, #d10000)',
                borderRadius: '20px',
                // filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                // clipPath: 'polygon(0 0, 1% 4%, 1% 7%, 1% 10%, 3% 24%, 3% 29%, 2% 55%, 2% 63%, 3% 87%, 0 94%, 0 100%, 3% 99%, 9% 99%, 16% 98%, 33% 98%, 46% 100%, 50% 98%, 61% 98%, 80% 98%, 95% 99%, 99% 100%, 100% 97%, 98% 95%, 99% 90%, 99% 85%, 99% 78%, 99% 58%, 99% 42%, 99% 13%, 98% 9%, 99% 6%, 99% 4%, 90% 0, 90% 2%, 25% 2%, 16% 0, 21% 2%)'
              }}
            >
              {/* introcard contents */}
              <Box
                // onClick={handleFlip}
                sx={{
                  position: 'relative',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  // rotate: '3deg' 
                  // pl: '40px',
                  // pr: '10px',
                  // pt: '60px',
                  // boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
                  // clipPath: 'polygon(0 0, 1% 4%, 1% 7%, 1% 10%, 3% 24%, 3% 29%, 2% 55%, 2% 63%, 3% 87%, 0 94%, 0 100%, 3% 99%, 9% 99%, 16% 98%, 33% 98%, 46% 100%, 50% 98%, 61% 98%, 80% 98%, 95% 99%, 99% 100%, 100% 97%, 98% 95%, 99% 90%, 99% 85%, 99% 78%, 99% 58%, 99% 42%, 99% 13%, 98% 9%, 99% 6%, 99% 4%, 90% 0, 90% 2%, 25% 2%, 16% 0, 21% 2%)'
                }}>
                <IntroCardContents />
              </Box>
            </Box>
          </Box>
          <Box className="back">
            <Box
              sx={{
                padding: '10px',
                // py: '10px',
                // pr: '10px',
                // pl: '80px',
                background: 'linear-gradient(100deg, red, #d10000)',
                borderRadius: '20px',
                // filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
                // clipPath: 'polygon(2% 3%, 7% 4%, 5% 7%, 7% 12%, 8% 6%, 10% 10%, 11% 2%, 100% 0, 100% 90%, 100% 100%, 13% 100%, 14% 97%, 12% 100%, 10% 96%, 10% 65%, 10% 21%, 8% 14%, 7% 20%, 4% 10%, 3% 15%)'
              }}
            >
              {/* introcard contents */}
              <Box
                onClick={handleFlip}
                sx={{
                  position: 'relative',
                  borderRadius: '10px',
                  backgroundColor: 'white',
                  padding: '10px',
                  height: '320px',
                }}>
                yayaya
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          padding: '10px',
          // rotate: '-3deg',
          // py: '10px',
          // pr: '10px',
          // pl: '80px',
          background: 'linear-gradient(100deg, red, #d10000)',
          borderRadius: '20px',
          // filter: 'drop-shadow(-2px 2px 2px rgba(0,0,0,0.5))',
          // clipPath: 'polygon(0 0, 1% 4%, 1% 7%, 1% 10%, 3% 24%, 3% 29%, 2% 55%, 2% 63%, 3% 87%, 0 94%, 0 100%, 3% 99%, 9% 99%, 16% 98%, 33% 98%, 46% 100%, 50% 98%, 61% 98%, 80% 98%, 95% 99%, 99% 100%, 100% 97%, 98% 95%, 99% 90%, 99% 85%, 99% 78%, 99% 58%, 99% 42%, 99% 13%, 98% 9%, 99% 6%, 99% 4%, 90% 0, 90% 2%, 25% 2%, 16% 0, 21% 2%)'
        }}
      > */}
      {/* introcard contents */}
      {/* <Box
          // onClick={handleFlip}
          sx={{
            position: 'relative',
            borderRadius: '10px',
            backgroundColor: 'white',
            padding: '10px',
            // rotate: '3deg'
            // pl: '40px',
            // pr: '10px',
            // pt: '60px',
            // boxShadow: 'inset 0px 0px 5px rgba(0, 0, 0, 0.5)',
            // clipPath: 'polygon(0 0, 1% 4%, 1% 7%, 1% 10%, 3% 24%, 3% 29%, 2% 55%, 2% 63%, 3% 87%, 0 94%, 0 100%, 3% 99%, 9% 99%, 16% 98%, 33% 98%, 46% 100%, 50% 98%, 61% 98%, 80% 98%, 95% 99%, 99% 100%, 100% 97%, 98% 95%, 99% 90%, 99% 85%, 99% 78%, 99% 58%, 99% 42%, 99% 13%, 98% 9%, 99% 6%, 99% 4%, 90% 0, 90% 2%, 25% 2%, 16% 0, 21% 2%)'
          }}>
          <IntroCardContents />
        </Box> */}
      {/* striped circle */}
      {/* <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'repeating-linear-gradient(45deg, red, red, 5px, transparent 5px, transparent 9px)',
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
            background: 'repeating-linear-gradient(45deg, #d10000, #d10000,  5px, transparent 5px, transparent 9px)',
            bottom: '15px',
            right: '-20px',
          }}
        >
        </Box> */}
      {/* spike */}
      {/* <Box
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
            clipPath: 'polygon(100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%)',
            top: '-20px',
            left: '-20px'
          }}
        >
        </Box> */}
      {/* circle around */}
      {/* <Box
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
                  backgroundColor: 'red',
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )
          })}
        </Box> */}
      {/* circle */}
      {/* <Box
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            border: '7px double #d10000',
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
            border: '7px solid red',
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
            backgroundColor: '#d10000',
            bottom: '-15px',
            right: '20px',
          }}
        >
        </Box> */}
      {/* </Box> */}
    </Box>
  )
}

export default IntroductionCard