'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import IntroCardContents from './IntroCardContents'
import { motion } from 'framer-motion'

const IntroductionCard = () => {
  const [onHover, setOnHover] = useState(false)
  const [onTouch, setOnTouch] = useState(false)
  const [completeAnimation, setCompleteAnimation] = useState(false)

  const letters = Array.from('Introduction')

  return (
    <Box
      position='relative'
      component={motion.div}
      initial={{ scaleY: 0.02, scaleX: 0 }}
      animate={{ scaleY: 1, scaleX: 1 }}
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      onTouchStart={() => setOnTouch(true)}
      onTouchEnd={() => setOnTouch(false)}
      onAnimationComplete={() => setCompleteAnimation(true)}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 28,
        delay: 0.5,
        scaleY: {
          type: 'spring',
          stiffness: 350,
          damping: 28,
          delay: 1,
        }
      }}>
      {/* top left particles */}
      {/* star long shadow */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          '& svg': {
            // filter: 'drop-shadow(-2px 3px 10px rgba(0,0,0,0.5))',
          },
          top: '-20px',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, black, black, 6px, transparent 6px, transparent 11px)',
          top: '-25px',
          left: '40px',
        }}>
      </Box> */}
      {/* circle */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          top: '-20px',
          left: '-30px',
        }}
      >
      </Box>
      <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '12.5%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, red, red, 6px, transparent 6px, transparent 11px)',
          top: '15px',
          left: '-30px',
        }}>
      </Box> */}
      {/* bottom right */}
      {/* circle */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '70px',
          height: '70px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, white, white, 6px, transparent 6px, transparent 11px)',
          bottom: '25px',
          right: '-30px',
        }}>
      </Box> */}
      {/* circle */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '30px',
          height: '30px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '60px',
          height: '60px',
          borderRadius: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'repeating-linear-gradient(45deg, red, red, 6px, transparent 6px, transparent 11px)',
          bottom: '-25px',
          right: '30px',
        }}>
      </Box> */}
      {/* spike */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
          bottom: '0px',
          right: '-35px'
        }}
      >
      </Box> */}
      {/* circle */}
      {/* <Box
        component={motion.div}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          borderRadius: '25%',
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
        component={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: onHover || onTouch ? 1 : 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          '& svg': {
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
      {/* introcard contents */}
      <Box
        component={motion.div}
        initial={{ height: '463.5px' }}
        animate={{ height: onHover || onTouch ? '458px' : '463.5px' }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 35
        }}
        sx={{
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: '25px',
          border: '10px solid white',
          left: -5,
          bottom: -5,
          width: '310px'
        }}>
        <Typography
          component={motion.div}
          initial={{ rotate: -5 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
          variant='h4'
          sx={{
            position: 'absolute',
            top: '-22.5px',
            left: '-9.5px',
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 600,
            WebkitTextStroke: '18px white',
            color: 'white',
            display: 'flex'
          }}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: completeAnimation ? 0 : -20, opacity: completeAnimation ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: 0.1 + index * 0.05,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          backgroundColor: 'black',
          borderRadius: '20px',
          bottom: 0,
          height: '50px',
          width: '100%'
        }}>
      </Box>
      <Box
        component={motion.div}
        initial={{ y: -10 }}
        animate={{ y: onHover || onTouch ? -5 : -10 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30
        }}
        sx={{
          position: 'relative',
          width: '300px',
          padding: '10px',
          background: 'linear-gradient(135deg, red, #d10000)',
          borderRadius: '20px',
        }}
      >
        {/* introcard contents */}
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            borderRadius: '10px',
            background: 'linear-gradient(180deg, white, white, rgba(240,240,240,1))',
            padding: '10px',
          }}>
          <IntroCardContents completeAnimation={completeAnimation} />
        </Box>
        {/* striped circle */}
        {/* <Box
          component={motion.div}
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: onHover || onTouch ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '25%',
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
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: onHover || onTouch ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d10000',
            clipPath: 'polygon(100% 50%,78.53% 59.27%,90.45% 79.39%,67.63% 74.27%,65.45% 97.55%,50% 80%,34.55% 97.55%,32.37% 74.27%,9.55% 79.39%,21.47% 59.27%,0% 50%,21.47% 40.73%,9.55% 20.61%,32.37% 25.73%,34.55% 2.45%,50% 20%,65.45% 2.45%,67.63% 25.73%,90.45% 20.61%,78.53% 40.73%,100% 50%,78.53% 59.27%,67.12% 55.56%,80% 50%,67.12% 44.44%,74.27% 32.37%,60.58% 35.44%,59.27% 21.47%,50% 32%,40.73% 21.47%,39.42% 35.44%,25.73% 32.37%,32.88% 44.44%,20% 50%,32.88% 55.56%,25.73% 67.63%,39.42% 64.56%,40.73% 78.53%,50% 68%,59.27% 78.53%,60.58% 64.56%,74.27% 67.63%,67.12% 55.56%,80% 50%)',
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
            borderRadius: '25%',
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
                  borderRadius: '25%',
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
          component={motion.div}
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: onHover || onTouch ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
          sx={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            borderRadius: '25%',
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
          component={motion.div}
          initial={{ scale: 0, rotate: 15 }}
          animate={{ scale: onHover || onTouch ? 1 : 0 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 20
          }}
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            borderRadius: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d10000',
            bottom: '-15px',
            right: '20px',
          }}
        >
        </Box> */}
        {/* title text */}
        <Typography
          component={motion.div}
          initial={{ rotate: -5 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
          variant='h4'
          sx={{
            position: 'absolute',
            top: '-18px',
            left: '-5px',
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 600,
            WebkitTextStroke: '10px red',
            color: 'red',
            display: 'flex'
          }}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: completeAnimation ? 0 : -20, opacity: completeAnimation ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: 0.2 + index * 0.05,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </Typography>
        <Typography
          component={motion.div}
          initial={{ rotate: -5 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
          variant='h4'
          sx={{
            position: 'absolute',
            top: '-18px',
            left: '-5px',
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 600,
            WebkitTextStroke: '5px black',
            color: 'red',
            display: 'flex'
          }}>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: completeAnimation ? 0 : -20, opacity: completeAnimation ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: 0.3 + index * 0.05,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </Typography>
        <Typography
          component={motion.div}
          initial={{ rotate: -5 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 50,
          }}
          variant='h4'
          sx={{
            position: 'absolute',
            top: '-20px',
            left: '-5px',
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 600,
            color: 'white',
            display: 'flex',
          }}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: completeAnimation ? 0 : -20, opacity: completeAnimation ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
                delay: 0.4 + index * 0.05
              }}
            >
              {letter}
            </motion.span>
          ))}
        </Typography>
      </Box>
    </Box>
  )
}

export default IntroductionCard