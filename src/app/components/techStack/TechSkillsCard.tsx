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
        damping: 35
      }}
      sx={{
        width: 300
      }}>
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
  )
}

export default TechSkillsCard