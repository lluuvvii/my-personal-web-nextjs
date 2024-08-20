'use client'

import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const TechSkillsCard = () => {
  const [onHover, setOnHover] = useState(false)
  const [onTouch, setOnTouch] = useState(false)

  return (
    <Box
      position='relative'
      component={motion.div}
      initial={{ x: -400, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      onHoverStart={() => setOnHover(true)}
      onHoverEnd={() => setOnHover(false)}
      onTouchStart={() => setOnTouch(true)}
      onTouchEnd={() => setOnTouch(false)}
      transition={{
        type: 'spring',
        stiffness: 600,
        damping: 35,
        delay: 0.2
      }}
      sx={{
        width: 300
      }}>
      <Box
        component={motion.div}
        initial={{ height: '55px' }}
        animate={{ height: onHover || onTouch ? '50px' : '55px' }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          backgroundColor: 'transparent',
          borderRadius: '22.5px',
          border: '5px solid white',
          left: -2.5,
          bottom: -2.5,
          width: '305px'
        }}>
        <Typography
          component={motion.div}
          initial={{ scale: 0, rotate: -5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            delay: 0.1
          }}
          variant='h4'
          sx={{
            position: 'absolute',
            top: '-20px',
            left: '-7px',
            textAlign: 'center',
            fontFamily: 'Nunito, Arial, sans-serif',
            fontWeight: 600,
            WebkitTextStroke: '15px white',
            color: 'white',
          }}>
          Language & Frameworks
        </Typography>
      </Box>
      <Box
        component={motion.div}
        initial={{ height: '50px' }}
        animate={{ height: onHover || onTouch ? '40px' : '50px' }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 20
        }}
        sx={{
          position: 'absolute',
          backgroundColor: 'black',
          borderRadius: '20px',
          bottom: 0,
          width: '100%'
        }}>
      </Box>
      <Box
        component={motion.div}
        initial={{ y: -10 }}
        animate={{ y: onHover || onTouch ? -5 : -10 }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 15
        }}
        sx={{
          position: 'relative',
          width: '300px',
          padding: '10px',
          backgroundColor: 'red',
          borderRadius: '20px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            borderRadius: '10px',
            backgroundColor: 'white',
            padding: '10px',
          }}>
        </Box>
        {/* title text */}
        <Typography
          component={motion.div}
          initial={{ scale: 0, rotate: -5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            delay: 0.1
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
          }}>
          Language & Frameworks
        </Typography>
        <Typography
          component={motion.div}
          initial={{ scale: 0, rotate: -5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            delay: 0.2
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
          }}>
          Language & Frameworks
        </Typography>
        <Typography
          component={motion.div}
          initial={{ scale: 0, rotate: -5 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30,
            delay: 0.3
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
          }}>
          Language & Frameworks
        </Typography>
      </Box>
    </Box>
  )
}

export default TechSkillsCard